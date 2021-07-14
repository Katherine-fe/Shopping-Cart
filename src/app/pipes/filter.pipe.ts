import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, text: string, arg: string ): Array<any> {
   if(text){
    const arr = [...value]
    const array = arr.find((omg) => omg.data.name.toLowerCase().search(text.toLowerCase()) !== -1) 
    return [array];
    } 
   if(arg == '') {
      return value
    }
    return value.filter(omg => omg.data.categoria == arg);
  }
}