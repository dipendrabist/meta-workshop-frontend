import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FoodService } from "./../food.service";
import { Food } from "./../food";
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
foods: Observable<Food[]>;
  constructor(private foodService: FoodService,
    private router: Router
  ) { }

  ngOnInit() {
 this.reloadData();
  }
 reloadData() {
    this.foods = this.foodService.getFoodsList();
  }

  deleteFood(id: number) {
    this.foodService.deleteFood(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateFood(id: number){
    this.router.navigate(['update', id]);
  }
}
