import { Injectable } from '@angular/core';

//httpclient module for making requests
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //create instance of httpclient module in order to use it (this is done through DI)
  constructor(private http: HttpClient) { }

  //method for users
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  //method for posts
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  //method for posts
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  // //method for posts
  // sendPost() {
  //   return this.http.post('https://jsonplaceholder.typicode.com/posts/1')
  // }

}
