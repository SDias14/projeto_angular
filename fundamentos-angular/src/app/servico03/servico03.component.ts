import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico03',
  templateUrl: './servico03.component.html',
  styleUrls: ['./servico03.component.css']
})
export class Servico03Component {

  logs: string[] = []

  constructor(public logger: LoggerService) { }

 totalLogs() {
//push dos logs para o array logs

this.logger.msgs.forEach(log => this.logs.push(log))
console.log(this.logs)



  }



}
