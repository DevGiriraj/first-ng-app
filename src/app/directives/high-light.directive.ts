import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: true
})
export class HighLightDirective {

  /////it is normal 
  // el:ElementRef
  // constructor(el:ElementRef) { 
  //   this.el=el;
  // }

  // we can write this thorugh dependency injection
  constructor(private el:ElementRef){

  }

  @HostBinding("style.backgroundColor")
  bgColor="red"

  @HostListener("mouseenter")
  changeFontSize(){
     this.el.nativeElement.style.fontSize="50px"

  }

  @HostListener("mouseleave")
 resetFontSize(){
    this.el.nativeElement.style.fontSize="30px"
    
  }

}
