import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(list: any[], column:string, orderby:string): any[] {

    let sortedData = list.sort((a, b)=>{

      if(orderby == 'asc'){ 
        if(a[column] > b[column]){
          return 1;
        }if(a[column] < b[column]){ 
          return -1;
        }
      }else{
        if(b[column] > a[column]){
          return 1;
        }if(b[column] < a[column]){ 
          return -1;
        }
      }
      return 0

    })
    return sortedData;
  }

}
