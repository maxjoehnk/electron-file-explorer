import {Pipe, PipeTransform} from '@angular/core';
import {format} from 'bytes';

@Pipe({
    name: 'bytes'
})
export class BytesPipe implements PipeTransform {

    transform(value: number, args?: any): any {
        return format(value, { decimalPlaces: 1 });
    }
}
