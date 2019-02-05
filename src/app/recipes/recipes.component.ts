import { Component, OnInit } from "@angular/core";

import { RecipeService } from "./recipe.service";
import { ExchangeService } from "./exchange.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  questionDefault: string = "Tyler C";
  formData = {
    question: ""
  };
  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {}

  onSubmit(signupForm) {
    console.log(signupForm.value);
    const { question } = signupForm.value;
    this.exchangeService.getExchangeQuestion(question).subscribe(
      (data: any[]) => {
        console.log(data);
      },
      err => {
        console.log(err.message);
      }
    );
    this.formData.question = question;
    signupForm.reset();
  }
}
