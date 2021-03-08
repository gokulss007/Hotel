import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { OrderComponent } from './order/order.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"Pricecard",component:PriceComponent},
  {path:"Order",component:OrderComponent},
  {path:"Gallery",component:GalleryComponent},
  {path:"Contact us",component:ContactComponent},
  {path:"Location",component:LocationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
