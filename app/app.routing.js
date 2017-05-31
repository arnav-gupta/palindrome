"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component"); //import home components
const palindrome_component_1 = require("./palindrome/palindrome.component"); //import home components
const appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'palindrome', component: palindrome_component_1.PalindromeComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' } // redirect to home page on load
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map