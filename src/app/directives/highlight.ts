import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appHighlight') highlightColor: string = '#0dcaf0';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.transition = 'background-color 0.4s';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyles(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyles(this.defaultColor);
  }

  private setStyles(bgColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
  }
}
