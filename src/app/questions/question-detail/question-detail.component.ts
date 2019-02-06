import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { ExchangeService } from '../exchange.service';
import { Questions } from '../../shared/questions.model';
import { Answer } from '../../shared/answer.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit, OnDestroy {
  question: Questions;
  create_date: number;
  answer: Answer;
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
      questionData => {
        this.question = questionData;
        const { accepted_answer_id } = questionData;
        this.exchangeService
          .getExchangeAnswer(accepted_answer_id)
          .subscribe((answerData: any) => {
            console.log(answerData);
            this.answer = answerData;
          });
      }
    );
  }

  ngOnDestroy() {
    this.customSubscription.unsubscribe();
  }
}
