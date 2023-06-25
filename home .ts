import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  food:Food[]=[];
  constructor(private api:FoodService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.food=this.api.getAllFoodsBySearchTerm(params.searchTerm)
      else{    this.food=api.getAll()}
    })

  }
  ngOnInit(): void {  }

}
