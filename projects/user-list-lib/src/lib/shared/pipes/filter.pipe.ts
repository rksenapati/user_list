import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], pattern:string): unknown {

    if(pattern === ""){return value;}
    const temp: any[] = [];
    for(let i=0; i<value.length; i++){
      let obj = value[i];
      if (obj.name.startsWith(pattern)){
        temp.push(obj);
      }
    }
    return temp;
  }

}
