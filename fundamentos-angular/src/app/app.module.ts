import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './firstComponent/firstComponent.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizedComponent } from './pipe-customized/pipe-customized.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    MultiplicaPorPipe,
    PipeCustomizedComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
