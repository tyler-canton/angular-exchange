import { Questions } from './../../shared/questions.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ExchangeService } from '../exchange.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  questions: Questions[];
  private customSubscription: Subscription;

  constructor(private exchangeService: ExchangeService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.customSubscription = this.exchangeService.passGetExchangeQuestionData.subscribe((data) => {
      this.questions = data;
      console.log('Data Subject', data);
    });
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.customSubscription.unsubscribe();
  }
}
