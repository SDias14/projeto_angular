import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
msgs: string[] = []

  log (msg: string) {
    console.log(msg)
    this.msgs.push(msg)
  }

  exibeLogs() {
    console.log(this.msgs)
  }

  

}
