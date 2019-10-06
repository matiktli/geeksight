import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortComponent } from './sort/sort.component';
import { TwoDVComponent } from './two-dv/two-dv.component';
import { Bar } from './two-dv/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SortComponent,
    TwoDVComponent,
    Bar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
