import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(x:string): any {
    let rx:any='';
    for (let i = 0; i < x.length; i++) {
      rx+=x[x.length-1-i];
      
    }
    return rx;
  }

}
