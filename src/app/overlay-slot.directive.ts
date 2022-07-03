import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({ selector: '[appRender]' })
export class OverlaySlotDirective implements AfterViewInit {
  @Input()
  set range(value) {
    value.order.forEach((order) => {
      // take a look caculate the translation x value
      // caculate the with of the book related to time range
      const ran = Math.floor(Math.random() * 1000) + 70;
      const ranWidth = Math.floor(Math.random() * 500) + 10;
      const child = this.document.createElement('div');
      child.className = 'overlay-slot';
      // child.style.transform = `translateX(${ran}px)`;

      const cssText = `width: ${ranWidth}px; transform: translateX(${ran}px);`;
      child.style.cssText = cssText;
      this.renderer.appendChild(this.elementRef.nativeElement, child);
    });

    console.log(value);
  }
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngAfterViewInit(): void {
    console.log(this.elementRef.nativeElement.offsetWidth);
  }
}
