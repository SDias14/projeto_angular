import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: Celular[] = [
    { id: 1, nome: 'iPhone 12', descricao: 'iPhone 12 128GB', esgotado: true },

    { id: 2, nome: 'iPhone 12 Pro', descricao: 'iPhone 12 Pro 256GB', esgotado: false },

    { id: 3, nome: 'iPhone 12 Pro Max', descricao: 'iPhone 12 Pro Max 512GB', esgotado: false },


  ]


}
