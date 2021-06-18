import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';


// TODO create a top level admin component that references the other components

const routes: Routes = [
  { path: 'recipes', component: ManageRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
