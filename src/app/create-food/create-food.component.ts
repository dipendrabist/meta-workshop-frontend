import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.scss']
})
export class CreateFoodComponent implements OnInit {
food: Food=new Food();
submitted =false;

  constructor(private foodService: FoodService,
private router: Router) { }

  ngOnInit() {
  }
newFood(): void{
this.submitted = false;
this.food= new Food();
}
save(){
this.foodService.createFood(this.food).subscribe(data=> console.log(data), error=> console.log(error));
this.food= new Food();
this.gotoList();
}

onSubmit(){
this.submitted=true;
this.save();
}
gotoList(){

}

}
