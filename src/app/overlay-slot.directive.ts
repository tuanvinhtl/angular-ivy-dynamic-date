import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appRender]' })
export class OverlaySlotDirective {
  @Input() set appUnless(condition) {
    // let div = document.createElement('div');
    // div.className = 'overlay-slot';
    // this.templateRef.elementRef.nativeElement.appendChild(div);
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    // let div = document.createElement('div');
    // div.className = 'overlay-slot';
    // this.templateRef.elementRef.nativeElement.appendChild(div);
    // this.viewContainer.createEmbeddedView(null);
  }
}
