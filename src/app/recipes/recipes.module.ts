import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AddRecipeComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
