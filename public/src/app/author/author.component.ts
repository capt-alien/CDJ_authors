import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() oneAuthor: any;

  constructor(private http: HttpService,
              private router: Router,) { }

  ngOnInit() {
    console.log(this.oneAuthor)
  }

  deleteAuthor(id:any){
    const observable = this.http.deleteAuthor(id)
      observable.subscribe((data:any)=>{
        console.log("Deleted"+data)
        this.http.getAuthors()
        this.router.navigate(['/'])

      });
  }

};
