import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailFormComponent } from './cocktail-form/cocktail-form.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  { path: '', component: CocktailFormComponent },
  { path: 'recipe/:id', component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
