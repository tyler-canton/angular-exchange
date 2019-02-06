import { Questions } from './../shared/questions.model';
import { Component, OnInit } from '@angular/core';

import { ExchangeService } from './exchange.service';
import { NgForm } from '@angular/forms';
import { RecipeService } from './recipe.service';
// Provider utilized here because only parent and children need this service
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ExchangeService, RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() { }

  onSubmit(signupForm: NgForm) {
    const { question } = signupForm.value;
    this.exchangeService.getExchangeQuestion(question).subscribe(
      (data: any[]) => {
        this.exchangeService.passGetExchangeQuestionData.next(data);
      },
      err => {
        console.log(err.message);
      }
    );
    signupForm.reset();
  }
}
