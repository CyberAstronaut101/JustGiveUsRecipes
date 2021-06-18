import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';


@NgModule({
  declarations: [
    ManageRecipesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
