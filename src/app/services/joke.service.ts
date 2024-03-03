import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
//http:HttpClient
  // constructor(http:HttpClient) { 
  //   this.http=http;
  // }

  // private http= inject(HttpClient)// use whenEver you do not have constructor for example in fuction
  constructor(private http:HttpClient) { 
    
  }
  getJoke(){
    return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
      }
}
