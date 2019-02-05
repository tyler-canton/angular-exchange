import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { RecipeService } from "./recipe.service";
import { NgForm } from "@angular/forms";

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
  constructor() {}

  ngOnInit() {}

  onSubmit(signupForm) {
    console.log(signupForm.value);
    const { question } = signupForm.value;
    this.formData.question = question;
    signupForm.reset();
  }
}
