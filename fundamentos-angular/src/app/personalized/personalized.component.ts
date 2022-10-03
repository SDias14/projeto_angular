import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalized',
  templateUrl: './personalized.component.html',
  styleUrls: ['./personalized.component.css']
})
export class PersonalizedComponent  {
@Input() name = ""
@Input() lastName = ""


}
