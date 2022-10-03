import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './firstComponent/firstComponent.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizedComponent } from './pipe-customized/pipe-customized.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { PersonalizedComponent } from './personalized/personalized.component';
import { CpaiComponent } from './cpai/cpai.component';
import { CfilhoComponent } from './cfilho/cfilho.component';
import { Servico01Component } from './servico01/servico01.component';
import { Servico02Component } from './servico02/servico02.component';
import { LoggerComponent } from './logger/logger.component';
import { Servico03Component } from './servico03/servico03.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    MultiplicaPorPipe,
    PipeCustomizedComponent,
    TwoWayDataComponent,
    RenderizandoListasComponent,
    PersonalizedComponent,
    CpaiComponent,
    CfilhoComponent,
    Servico01Component,
    Servico02Component,
    LoggerComponent,
    Servico03Component
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
