//um componente basicamente é uma classe 

import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-firstComponent', //sempre com app- no inicio
    template: "<h1>Meu primeiro componente</h1>", //template inline
    styles: ["h1 { color: red; }"]
})
export class FirstComponent {

}