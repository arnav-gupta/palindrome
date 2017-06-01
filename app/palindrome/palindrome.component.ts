import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
   // selector: 'app-home',
    templateUrl: 'app/palindrome/palindrome.component.html'

})
export class PalindromeComponent {
    rem: number;
    reverse_num: number;
    temp: number;
    start: number = 1;
    end: number = 1000;
    pal:any[]=[];
    fnum:number;
    snum:number;
    res:any;
    showres:boolean=false;
    showload:boolean=false;
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
    isPalindrome(s,i) {
       return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i] && this.isPalindrome(s,++i);
    }
    palind(x,y){
            x=parseInt(x);
            y=parseInt(y);
            if(x<0 || x>999999999999 || y<0 || y >999999999999){
            alert('Numbers must be in range 0 to 999999999999 ');
                return false;
            }else if(x >=y){
                alert('Start number must be smaller than end number. ');
                return false;
            }else{
            this.showload=true;
                    for (let num = y; num >= x; num--) {
                    if(this.isPalindrome(num.toString().split(''),0)){
                          this.res = 'Largest Palindrome between ' + this.fnum + ' and ' + this.snum + ' is ' + num;
                          this.showload = false;
                          this.showres = true;
                          return;
                        }

                  }
                  this.res='No palindromic number found!';
                  this.showload=false;
                  this.showres=true;

                // this.res=Math.max.apply(Math, this.pal);
                   //   console.log(this.res);

            }
    }
}
