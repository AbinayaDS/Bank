import { Pipe, PipeTransform } from '@angular/core';
import { details } from './details';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: details[], txt: string):details[]{
    let filter:details[]=[];
    for(let index=0;index<value.length; index++){
      if(value[index].Date.toLowerCase().indexOf(txt.toLowerCase())>=0){
        filter.push(value[index]);
      }
    }
    return filter;
  }

}
