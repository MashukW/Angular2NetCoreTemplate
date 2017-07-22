import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    template: `<h1>Login page</h1>`
})
export class LoginComponent implements OnInit {

    constructor() {
        console.log('LoginComponent -> constructor');
    }

    ngOnInit() {
        console.log('LoginComponent -> ngOnInit');
    }
}