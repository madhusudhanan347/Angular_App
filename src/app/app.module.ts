import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ImgCompComponent } from './img-comp/img-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    ImgCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
