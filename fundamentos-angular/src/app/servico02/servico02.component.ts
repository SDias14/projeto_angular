import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico02',
  templateUrl: './servico02.component.html',
  styleUrls: ['./servico02.component.css']
})
export class Servico02Component {

  description = ''

  constructor(public logger : LoggerService) {
    }

  addDescription() {
    this.logger.log(`O produto ${this.description} foi adicionado`)
  }  

  addTotalLogs() {
    this.logger.exibeLogs()
  }

}
