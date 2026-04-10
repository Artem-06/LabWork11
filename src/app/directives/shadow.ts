import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShadow]',
})
export class ShadowDirective {
  @Input('appShadow') shadowBlur: string = '10px';

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    this.elem.nativeElement.style.transition =
      'text-shadow 0.3s ease-in-out, color 0.3s ease-in-out';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setShadow(`0px 0px ${this.shadowBlur} rgba(0, 0, 0, 0.5)`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setShadow('');
  }

  private setShadow(shadow: string) {
    this.elem.nativeElement.style.textShadow = shadow;
  }
}
