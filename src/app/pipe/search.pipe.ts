import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, search: string): any {
    if(!data) {
      return [];
    }
    if(!search) {
      return data;
    }
    search = search.toLowerCase();
    return data.filter((val:any)=>val.name.toLowerCase().includes(search) || val.email.toLowerCase().includes(search));
  }

}
