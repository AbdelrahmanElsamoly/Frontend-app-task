import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, name: string) {
    // let Heroes = [];
    // for (let Hero of value) {
    //   if (Hero['name'] === name) {
    //     Heroes.push(Hero);
    //   }
    // }
    // return Heroes;
    value = value.filter((a: any) => {
      return a.value.toLocaleLowerCase().match(name.toLocaleLowerCase());
    });
  }
}
