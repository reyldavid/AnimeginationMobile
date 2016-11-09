import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/anime.api.service';
import { CustomerService } from '../services/customer.service';
import { TokenModel } from '../models/tokenModel';
import { States } from '../models/states';

@Component({
    selector: 'states',
    templateUrl: '../views/statesDropDown.html', 
    //template: 
    //    `<select (change)="selectItem($event.target.value)" class="form-control" id="state">
    //        <option *ngFor="#state of states" value={{state.StateID}} [selected]="state.StateName == defaultState">
    //            {{state.StateName}}
    //        </option>
    //     </select>`,
    providers: [CustomerService, ApiService]
})
export class StatesDropDownComponent implements OnInit {

    @Input()
    public defaultState: string;

    @Output()
    public select: EventEmitter<number> = new EventEmitter();

    public states: States[];

    constructor(private _customerService: CustomerService) {
        console.log('states construct');
    }

    selectItem(value) {
        this.select.emit(value);
    }

    ngOnInit(): any {
        this._customerService.getStates().then((states: States[]) => {
            this.states = states;
        });
    }
}
