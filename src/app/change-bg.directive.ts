import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
  @Input() isCorrect : boolean = false;
  constructor(private el : ElementRef,private render : Renderer2) {}
  @HostListener('click') answer(){
    if(this.isCorrect){
       this.render.setStyle(this.el.nativeElement,'backgroud','green');
       this.render.setStyle(this.el.nativeElement,'colour','white');
       this.render.setStyle(this.el.nativeElement,'border','2px solid grey');
    }else{
      this.render.setStyle(this.el.nativeElement,'backgroud','red');
      this.render.setStyle(this.el.nativeElement,'colour','white');
      this.render.setStyle(this.el.nativeElement,'border','2px solid grey');


    }
  }
}
