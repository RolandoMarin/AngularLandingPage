import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { MainComponent } from "./main/main.component";
import { ShopComponent } from "./shop/shop.component";



// my list of routes
const routes: Routes = [ 
    
    {path:"home", component: MainComponent},
    {path:"shop", component: ShopComponent},
    {path:"contact", component: ContactComponent}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}


