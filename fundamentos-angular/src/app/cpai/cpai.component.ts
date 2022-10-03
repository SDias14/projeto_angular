import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpai',
  templateUrl: './cpai.component.html',
  styleUrls: ['./cpai.component.css']
})
export class CpaiComponent  {
  lastName = "da Rocha"

  showFullName(fullName : any){
    alert(`O nome completo é ${fullName}`)
  }


  }




