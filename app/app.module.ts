import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {AppComponent}  from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { PalindromeComponent } from './palindrome/palindrome.component'; //import home components

import {CheckboxModule,RadioButtonModule, InputTextModule,DataTableModule,ButtonModule,DialogModule,ChartModule,SharedModule,CalendarModule,DropdownModule} from 'primeng/primeng';
import { routing }  from './app.routing';
@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,routing],
  declarations: [AppComponent, HomeComponent,PalindromeComponent ],
  bootstrap:    [AppComponent]
})
export class AppModule { }