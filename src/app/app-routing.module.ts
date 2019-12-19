import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFoodComponent } from './create-food/create-food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
const routes: Routes = [
{ path: '', redirectTo: 'food', pathMatch: 'full' },
{ path: 'foods', component: FoodListComponent },
{ path: 'add', component: CreateFoodComponent },
{ path: 'update/:id', component: UpdateFoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
