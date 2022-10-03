import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cfilho',
  templateUrl: './cfilho.component.html',
  styleUrls: ['./cfilho.component.css']
})
export class CfilhoComponent  {

  @Input() lastName = ''
  @Output() showName = new EventEmitter()

 name = ''
}
