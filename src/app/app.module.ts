import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { MaterialModule } from './material/material.module';
import { GalleryComponent } from './gallery/gallery.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    MenuComponent,
    HomeComponent,
    PriceComponent,
    GalleryComponent,
    OrderComponent,
    ContactComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
