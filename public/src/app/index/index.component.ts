import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  authors: any = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    const observable = this.http.getAuthors();
    observable.subscribe((data:any)=>{
      this.authors = data;
      console.log(data)
    })
  }

}
