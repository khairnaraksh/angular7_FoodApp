import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public foodCategory: string[] = [];
  public FoodType: string[] = [];
  public foodModel: string[] = [];
  public savesFood: string[] = [];

  constructor(public router: Router, public homeService: HomeService) { }

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
    this.router.navigate(["/MyLogs"]);
    this.savesFood =food;
  }
}
