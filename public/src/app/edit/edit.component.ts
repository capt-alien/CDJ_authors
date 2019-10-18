import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author = {
    // EX: book: "",
       name: ''
 };
 errors: any;


  constructor(private route: ActivatedRoute,
               private http: HttpService,
               private router: Router,) { }

  ngOnInit() {
    this.route.params.subscribe((data:any)=>{
      this.getOneByID(data.id);
    });
  }
  getOneByID(id){
    const observable = this.http.getOneAuthor(id);
    observable.subscribe((data: any)=>{
      this.author = data;
      console.log(data);
    });
  }
  buttonSubmit(id){
    // 1. check this.author
    console.log(this.author)
    // 2. if form data is good
    const observable = this.http.updateAuthor(id, this.author)
    observable.subscribe((data:any)=>{
      if(data.message === 'fail'){
        this.errors = data.err.errors;
        console.log(data.err.errors)
      } else{
        console.log("should be here")
        this.router.navigate(['/'])
      }
    });
    // 3. this.http.edit edit method of your service
    // 4. pass the id and the author
  }
}
