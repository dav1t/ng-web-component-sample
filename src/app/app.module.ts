import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { BoxTimerComponent } from './box-timer/box-timer.component';

@NgModule({
  declarations: [BoxTimerComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [BoxTimerComponent],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const timer = createCustomElement(BoxTimerComponent, { injector });
    customElements.define('box-timer', timer);
  }
  ngDoBootstrap(): void {}
}
