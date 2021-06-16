import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {


  constructor(private element:ElementRef) {
    this.element.nativeElement.style.color="green";
   }

   @HostListener('mouseenter') mouseEnter(){
     this.changecolor("black");
   }

   @HostListener('mouseleave') mouseLeave(){
    this.changecolor("pink");
  }

   changecolor(color){
    this.element.nativeElement.style.color=color;
   }

}
