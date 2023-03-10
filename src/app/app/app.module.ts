import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    BetterhighlightDirective,
    HoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
