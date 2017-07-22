import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-page',
    template: `<div> TEST </div><router-outlet></router-outlet>`,
    providers: []
})
export class AppComponent implements OnInit {

    constructor() {
        console.log('AppComponent -> constructor');
    }

    ngOnInit() {
        console.log('AppComponent -> ngOnInit');
    }
}