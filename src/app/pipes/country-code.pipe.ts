import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true
})
export class CountryCodePipe implements PipeTransform {

  transform(value:number, counry?:string): string {
    let code = "+91-"
    if(counry=="USA") code ="+1-"
    return code+ value
      }

}
