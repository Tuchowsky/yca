import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
 
@Injectable()
export class ScrollService {
 
  constructor(private _scrollToService: ScrollToService) { }
 
  public triggerScrollTo(target) {
    
    const config: ScrollToConfigOptions = {
      target: target,
      duration: 850,
      easing: 'easeInOutCubic',
    };
    this._scrollToService.scrollTo(config);
  }
}