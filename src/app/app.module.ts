import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdQLOPj_voHXbVOmCpcVSpUOoWIUyIIcE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
