import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { DirectionDirective } from './directives/direction.directive';
import { TourDetailComponent } from './tours/tour-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    DirectionDirective,
    TourDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdQLOPj_voHXbVOmCpcVSpUOoWIUyIIcE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
