import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorMakerComponent } from './error-maker/error-maker.component';
import { ErrorShowerComponent } from './error-shower/error-shower.component';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMakerComponent,
    ErrorShowerComponent
  ],
  imports: [
    BrowserModule
  ],
	providers: [
		{ provide: ErrorHandler, useClass: ErrorHandlerService },
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
