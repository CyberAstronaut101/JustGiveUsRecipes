import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EatingoutRoutingModule } from './eatingout-routing.module';
import { GenerateFastfoodComponent } from './generate-fastfood/generate-fastfood.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';


@NgModule({
  declarations: [
    GenerateFastfoodComponent,
    SearchRestaurantComponent
  ],
  imports: [
    CommonModule,
    EatingoutRoutingModule
  ]
})
export class EatingoutModule { }
