import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';


import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [							
    AppComponent,
      MainComponent,
      ShopComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
