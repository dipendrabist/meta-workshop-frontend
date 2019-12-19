import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFoodComponent,
    FoodListComponent,
    UpdateFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
