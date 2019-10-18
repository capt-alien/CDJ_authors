import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// This is where you connect to the backend
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
    // Run commands here you want to run on index
    this.getAuthors()
  }
  // INDEX
  getAuthors(){
    return this.http.get('/authors')
  }
  // GET ONE
  getOneAuthor(id){
    return this.http.get(`/authors/${id}`)
  }
  // NEW
  postAuthor(data){
    return this.http.post('/authors', data)
  }
  // EDIT
  updateAuthor(id, data){
    return this.http.put(`/authors/${id}`, data)
  }
  // DELETE
  deleteAuthor(id){
    return this.http.delete(`/authors/${id}`)
  }
  // END ROUTES
};
