"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PalindromeComponent = class PalindromeComponent {
    constructor() {
        this.start = 1;
        this.end = 1000;
        this.pal = [];
        this.showres = false;
        this.showload = false;
    }
    constructer() {
    }
    ngOnInit() {
        /* console.log('here');
         for (let num = this.start; num <= this.end; num++) {
             var x=num.toString().split('').reverse().join('');
             console.log(num+' ---'+x);
             if(num==x){
                 this.pal.push(x);
             }
 
         }
         console.log(this.pal);
        console.log('Largest   '+Math.max.apply(Math, this.pal));*/
    }
    palind(x, y) {
        x = parseInt(x);
        y = parseInt(y);
        if (x < 0 || x > 999999999999 || y < 0 || y > 999999999999) {
            alert('Numbers must be in range 0 to 999999999999 ');
            return false;
        }
        else if (x >= y) {
            alert('Start number must be smaller than end number. ');
            return false;
        }
        else {
            this.showload = true;
            for (let num = y; num >= x; num--) {
                var a = num.toString().split('').reverse().join('');
                if (num == a) {
                    // this.pal.push(x);
                    this.res = 'Largest Palindrome between ' + this.fnum + ' and ' + this.snum + ' is ' + a;
                    this.showload = false;
                    this.showres = true;
                    return;
                }
            }
            this.res = 'No palindromic number found!';
            this.showload = false;
            this.showres = true;
            // this.res=Math.max.apply(Math, this.pal);
            //   console.log(this.res);
        }
    }
};
PalindromeComponent = __decorate([
    core_1.Component({
        // selector: 'app-home',
        templateUrl: 'app/palindrome/palindrome.component.html'
    })
], PalindromeComponent);
exports.PalindromeComponent = PalindromeComponent;
//# sourceMappingURL=palindrome.component.js.map