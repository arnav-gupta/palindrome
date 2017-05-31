import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components
import { PalindromeComponent } from './palindrome/palindrome.component'; //import home components
import { AppComponent } from './app.component'; //import home components

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'palindrome', component: PalindromeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);