import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[carBorderCard]'
})
export class BorderCardDirective {

private initialColor: string = '#f1ffff';
private defaultColor: string = '#e55500';
private defaultHeight: number = 200;

  constructor(private el: ElementRef) {

   this.setHeight(this.defaultHeight);
   this.setBorder(this.initialColor);
   }

   @Input('carBorderCard') borderColor: string | undefined;

   @HostListener('mouseenter') onMouseEnter()
   {
   this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave()
   {
   this.setBorder(this.initialColor);
   }

  setHeight(height: number)
  {
  this.el.nativeElement.style.height = height +'px';
  }

setBorder(color: string)
{
this.el.nativeElement.style.border = 'solid 4px' + color;
}



}
