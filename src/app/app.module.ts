import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KnowMoreComponent } from './know-more/know-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KnowMoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
