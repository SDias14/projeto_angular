import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(value: number, multiplier : number): unknown {
    return value * multiplier;
  }

}
