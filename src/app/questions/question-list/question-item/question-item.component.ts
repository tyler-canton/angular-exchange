import { Questions } from '../../../shared/questions.model';
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeService } from '../../exchange.service';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {
  @Input() question: Questions;

  constructor(
    private exchangeService: ExchangeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onQuestionDetail(question) {
    this.exchangeService.passGetExchangeQuestionData.next(question);
    this.router.navigate(['detail'], { relativeTo: this.route });
  }
}
