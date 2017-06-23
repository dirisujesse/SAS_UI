import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naira'
})
export class NairaPipe implements PipeTransform {

  transform(value: any): any {
    return `&#8358; ${value}`;
  }
};

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any): any {
    value = value.split(" ");
    value =  value.slice(0, 10);
    return `${value.join(' ')}...`
  }
}
