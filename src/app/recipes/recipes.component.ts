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
  @ViewChild("form") signupForm: NgForm;
  questionDefault: string = "Tyler C";
  formData = {
    question: ""
  };
  constructor() {}

  ngOnInit() {}
  onSurname() {
    this.signupForm.form.patchValue({
      question: this.questionDefault
    });
  }
  onSubmit() {
    console.log(this.signupForm.value);
    this.formData.question = this.signupForm.form.value.question;
    this.signupForm.reset();
  }
}
