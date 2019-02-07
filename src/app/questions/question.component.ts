import { Questions } from '../shared/questions.model';
import { Component, OnInit } from '@angular/core';

import { ExchangeService } from './exchange.service';
import { NgForm } from '@angular/forms';
// Provider utilized here because only parent and children need this service
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [ExchangeService]
})
export class QuestionComponent implements OnInit {
  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {}

  onSubmit(signupForm: NgForm) {
    const { question } = signupForm.value;
    this.exchangeService.getExchangeQuestion(question).subscribe(
      (data: any[]) => {
        this.exchangeService.passGetExchangeQuestionsData.next(data);
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
