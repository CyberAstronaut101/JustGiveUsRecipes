import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { generate } from 'rxjs';
import { GenerateFastfoodComponent } from './generate-fastfood/generate-fastfood.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'fastfood'},
  { path: 'fastfood', component: GenerateFastfoodComponent},
  { path: 'search', component: SearchRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EatingoutRoutingModule { }
