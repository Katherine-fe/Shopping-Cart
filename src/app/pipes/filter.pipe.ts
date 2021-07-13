import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, arg: string): Array<any> {
    console.log(arg)
    if(arg == ''){
      return value
    }
    return value.filter(omg => omg.data.categoria == arg);   
}
}