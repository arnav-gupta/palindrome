import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'app/home/home.component.html'

})
export class HomeComponent {
    constructer() {

    }
     ngOnInit() {
        console.log('home');;
    }
}
