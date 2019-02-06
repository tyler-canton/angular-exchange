import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { ExchangeService } from '../exchange.service';
import { Questions } from '../../shared/questions.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit, OnDestroy {
  question: Questions;
  create_date: number;
  private customSubscription: Subscription;
  constructor(
    private exchangeService: ExchangeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // fetch from the question service getting the id from params
    // this.route.params.subscribe((params: Params) => {
    //   this.create_date = +params['id'];
    // });
    this.customSubscription = this.exchangeService.passGetExchangeQuestionData.subscribe(
      data => {
        this.question = data;
        console.log('Single Question Subject', data);
      }
    );
  }

  ngOnDestroy() {
    this.customSubscription.unsubscribe();
  }
}
