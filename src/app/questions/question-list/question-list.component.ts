import { Questions } from '../../shared/questions.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ExchangeService } from '../exchange.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit, OnDestroy {
  questions: Questions[];
  private customSubscription: Subscription;

  constructor(
    private exchangeService: ExchangeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.customSubscription = this.exchangeService.passGetExchangeQuestionsData.subscribe(
      data => {
        this.questions = data;
        console.log('Data Subject', data);
      }
    );
  }

  onNewquestion() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.customSubscription.unsubscribe();
  }
}
