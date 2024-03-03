import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { user } from './model/user';
import { JokeComponent } from './component/joke/joke.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule,JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';
  users=[
{name:"ramesh",isSingle:true,salary:7000},
// {name:"mukesh",isSingle:false,salary:9000},
// {name:"nitesh",isSingle:true,salary:8000},

  ]
recevedData(e:user){
console.log(e)



const userIndex= this.users.findIndex(users=>users.name==e.name)
this.users[userIndex].salary=e.newSalary

  }

  clear(){
   this.users=[]
  }

}
