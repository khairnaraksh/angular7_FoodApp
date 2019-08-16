import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/services/home.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public foodCategory: string[] = [];
  public FoodType: string[] = [];
  public foodModel: string[] = [];
  public savesFood: any = {};

  constructor(public router: Router, public homeService: HomeService,
     private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.homeService.getFoodData().subscribe((response) => {
      if (response && response['foodCategoryItems']) {
        this.foodCategory = response['foodCategoryItems'];
      }
    });
  }
  onChangeCategory = (category) => {
    this.FoodType = this.foodCategory.filter(x => x['name'] === category)[0]['foodItems'];
  }
  onChangeFood = (food) => {
    this.foodModel['calories'] = this.FoodType.filter(x => x['name'] === food)[0]['totalCalories'];
  }
  saveFood = (food) => {
    this.savesFood = food;
    this.homeService.saveFood(food).subscribe((response) => {
      if (response && response['id']) {
        this.showSnackBar('Successfully Added');
      }
      else{
        this.showSnackBar('No Data Found');
      }
    });
  }
   //********** show snackbar for message **********//
   showSnackBar = (message: string) => {
    this.snackBar.open(message, 'Close', { duration: 5000 });
  }
}
