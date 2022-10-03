import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico01',
  templateUrl: './servico01.component.html',
  styleUrls: ['./servico01.component.css']
})
export class Servico01Component {
nome = ''

constructor(private logger: LoggerService) { 
  }

addName() {
  this.logger.log(`O nome ${this.nome} foi adicionado`)
}


}
