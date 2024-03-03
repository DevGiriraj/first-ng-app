import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input,OnChanges,OnDestroy,OnInit,Output,SimpleChanges,ViewChild,booleanAttribute, numberAttribute, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { __values } from 'tslib';
import { user } from '../../model/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighLightDirective } from '../../directives/high-light.directive';
import { Element } from '@angular/compiler';


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
export class UserProfileComponent implements OnInit ,OnDestroy ,OnChanges,AfterViewInit {
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

// bgColor="blue"

// @viewChild ("myheading") heading? :ElementRef
@ViewChild ("myheading") heading? :ElementRef

sendData(){
  this.myEvent.emit({name:this.name , newSalary:25000})
}

constructor(){
// init properties
//dependency injection
// event listener register
console.log("constructor called" , this.name)
console.log("constructor called", this.heading?.nativeElement.textContent)
}
  ngAfterViewInit(): void {
    
console.log("ngAfterViewInit called" , this.name)
console.log("ngAfterViewInit native called", this.heading?.nativeElement.textContent)
  }
  ngOnInit(): void {
    console.log("ngOnInit called" , this.name)
    console.log("ngOnInit called", this.heading?.nativeElement.textContent)
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy Called")
  }

ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchange called",changes)
    console.log("ngOnChanges called", this.heading?.nativeElement.textContent)
  }
    
  }

// ngOnInit():void{
//   // init properties
//   // event listener register
// // intial api call
//   console.log("ngOnInt called", this.name)

//   console.log("ngOnInt called", this.heading?.nativeElement.textContent)
// }



 
