import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumToArray' })
export class EnumsToArrayPipe implements PipeTransform {
  transform(value: any): Object {
    return Object.keys(value)
      .filter(e => !isNaN(+e))
      .map(o => {
        return { index: +o, name: value[o] };
      });
  }
}
