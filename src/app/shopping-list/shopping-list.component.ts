import { Component, OnInit, OnDestroy } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private customSubscription: Subscription;
  constructor(private slService: ShoppingListService) {}
  onEditItem(idx: number) {
    this.slService.startedEditing.next(idx);
  }
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    // We are subscribing to our own subject so we need to destroy it
    this.customSubscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.customSubscription.unsubscribe();
  }
}
