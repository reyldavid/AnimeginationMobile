import { Injectable } from '@angular/core';
import { ApiService } from './anime.api.service';
import { TokenModel } from '../models/tokenmodel';
import { RegisterModel } from '../models/registermodel';
import { LoginModel } from '../models/loginmodel';
import { UserReturnModel } from '../models/userReturnModel';
import { UserAccountModel } from '../models/userAccountModel';
import { States } from '../models/states';

@Injectable()
export class CustomerService {

    constructor(private _apiService: ApiService) {
    }

    userLogin(username: string, password: string) {
        return new Promise( (resolve, reject) => {
            this._apiService.userLogin(username, password)
                .subscribe(
                (data: TokenModel) => {
                    resolve(data);
                }
                ,
                error => {
                    console.log('login error: ' + error);
                    reject(error);
                },
                () => console.log("Api User Login seikoo")
            );
        })
    }

    register(registerModel: RegisterModel) {
        return new Promise((resolve, reject) => {
            this._apiService.createUser(registerModel)
                .subscribe(
                (data: UserReturnModel) => {
                    resolve(data);
                },
                error => {
                    console.log('register part-1 error: ' + error); reject(error);
                },
                () => console.log("Api Register Part-1 seikoo")
                );
        })
            .then((userReturn: UserReturnModel) => {

            registerModel.UserId = userReturn.id;

            return new Promise((resolve, reject) => {
                this._apiService.createUserAccount(registerModel)
                    .subscribe(
                        (data: TokenModel) => {
                            resolve(data);
                        },
                        error => {
                            console.log('register part-2 error: ' + error); reject(error);
                        },
                        () => console.log("Api Register Part-2 seikoo")
                    );
            })
        })
    }

    createUser(registerModel: RegisterModel) {
        return new Promise((resolve, reject) => {
            this._apiService.createUser(registerModel)
                .subscribe(
                    (data: UserReturnModel) => {
                        resolve(data);
                    },
                    error => {
                        console.log('create user error: ' + error); reject(error);
                    },
                    () => console.log("Api Create User seikoo")
                );
        })
    }

    createUserAccount(registerModel: RegisterModel) {
        return new Promise((resolve, reject) => {
            this._apiService.createUserAccount(registerModel)
                .subscribe(
                (data: TokenModel) => {
                        resolve(data);
                    },
                    error => {
                        console.log('create user account error: ' + error); reject(error);
                    },
                    () => console.log("Api Create User Account seikoo")
                );
        })
    }

    getUser(token: TokenModel) {
        return new Promise((resolve, reject) => {
            this._apiService.getUserAccount(token)
                .subscribe(
                (data: UserAccountModel) => {
                    resolve(data);
                }
                ,
                error => { console.log('get user error: ' + error); reject(error); },
                () => console.log("Api Get User seikoo")
                );
        })
    }

    updateUserAccountNames(token: TokenModel, userAccountModel: UserAccountModel) {
        return new Promise((resolve, reject) => {
            this._apiService.putUserAccountNames(token, userAccountModel)
                .subscribe(
                (data: UserAccountModel) => {
                    resolve(data);
                },
                error => {
                    console.log('update user account error: ' + error); reject(error);
                },
                () => console.log("Api Update User Account seikoo")
                );
        })
    }

    updateUserAccountAddress(token: TokenModel, userAccountModel: UserAccountModel) {
        return new Promise((resolve, reject) => {
            this._apiService.putUserAccountAddress(token, userAccountModel)
                .subscribe(
                (data: UserAccountModel) => {
                    resolve(data);
                },
                error => {
                    console.log('update user address error: ' + error); reject(error);
                },
                () => console.log("Api Update User Address seikoo")
                );
        })
    }

    getStates() {
        return new Promise(resolve => {
            this._apiService.getStates()
                .subscribe(
                (data: States[]) => resolve(data),
                error => alert(error),
                () => console.log("Api States seikoo")
                );
        });
    }

}
