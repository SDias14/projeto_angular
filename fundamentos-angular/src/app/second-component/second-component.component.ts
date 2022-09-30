import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent  {

  name = 'John Doe';
  birthDate = "01/01/2000";
  urlImage = "/assets/img/obama.jpg";

  
}
