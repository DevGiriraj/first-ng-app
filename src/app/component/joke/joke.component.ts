import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit {
  joke="loading"

constructor(public jokeservice:JokeService){}

ngOnInit(){
  this.getAnotherjoke()
}
// getAnotherjoke(){
//   this.jokeservice.getJoke().subscribe((data: any)=>{
//     this.joke=data.value
//   },(err)=>{
//     console.log("Error hai",err)
//   })
  
// }

getAnotherjoke(){
  this.jokeservice.getJoke().subscribe({
    next:(data: any)=>this.joke=data.value,
    error:(error)=>console.log(error)
    
  })  
} 


}
