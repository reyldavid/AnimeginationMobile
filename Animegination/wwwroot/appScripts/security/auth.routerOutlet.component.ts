import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';
import {LoginComponent} from '../customers/login.component';

@Directive({
    selector: 'router-outlet'
})
export class AuthRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    constructor(_viewContainerRef: ViewContainerRef,
        _loader: DynamicComponentLoader,
        _parentRouter: Router,
        @Attribute('name') nameAttr: string)
    {
        super(_viewContainerRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        // The Boolean following each route below
        // denotes whether the route requires authentication to view
        this.publicRoutes = {
            '': true,
            'home': true,
            'productsList': true,
            'product': true,
            'slice': true,
            'about': true,
            'contact': true,
            'login': true,
            'register': true,
            'categories': true,
            'news': true,
            'search': true,
            'categoryList': true,
            'genres': true
        };
    }

    activate(instruction: ComponentInstruction) {
        let url = instruction.urlPath;
        console.log('router url: ' + url);
        console.log('jwt: ' + localStorage.getItem('jwt'));

        if (!url.includes('slice') && !url.includes('genre') && !url.includes('detail') ) {
            if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
                this.parentRouter.navigateByUrl('/login');
            }
        }
        return super.activate(instruction);
    }
}
