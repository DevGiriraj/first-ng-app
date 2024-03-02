import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input,Output,booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { __values } from 'tslib';
import { user } from '../../model/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighLightDirective } from '../../directives/high-light.directive';


function formatName(value:string){
return "Hi "+ value
}


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountryCodePipe,HighLightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
// name : string= "ramesh"
//status="single"
// salary= 4000
 //isButtonDisable=true
 inputVal="test"
 //phomeNo=7869087678

// users=[
//   {name:"ramesh",isSingle:true,salary:78},
//   {name:"raju",isSingle:true,salary:1000},
//   {name:"ham",isSingle:false,salary:5690}
// ]

// onChange(e:Event){
//  const values=(e.target as HTMLInputElement).value
//   this.inputVal=values
// }


@Input({alias:"userName"}) name=""
@Input({transform:booleanAttribute}) isSingle! :boolean
@Input({transform:numberAttribute}) salary! :number

@Output() myEvent = new EventEmitter<user>()

bgColor="blue"

sendData(){
  this.myEvent.emit({name:this.name , newSalary:25000})
}

 }
