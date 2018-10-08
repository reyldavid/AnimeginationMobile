import { Pipe } from '@angular/core';

@Pipe({
    name: 'phone'
})

export class phonePipe {

    transform(val) {

        var viewVal = val.trim().replace(/^\+/, '');
        viewVal = viewVal.replace(/[^0-9]/g, '').slice(0, 10);
        var area, number;

        //if (viewVal.match(/[^0-9]/)) {
        //    return viewVal;
        //}

        switch (viewVal.length) {
            case 1:
            case 2:
            case 3:
                area = viewVal;
                break;

            default:
                area = viewVal.slice(0, 3);
                number = viewVal.slice(3);
        }

        if (number) {
            if (number.length > 3) {
                number = number.slice(0, 3) + '-' + number.slice(3, 7);
            }
            else {
                number = number;
            }
            return ("(" + area + ") " + number).trim().slice(0, 13);
        }
        else {
            return "(" + area;
        }
    }
}
