import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from 'src/app/shared/questions.model';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {
  @Input() question: Questions;

  constructor(
    private exchangeService: ExchangeService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  isLoggedIn: boolean;
  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  onQuestionDetail(question) {
    this.exchangeService.passGetExchangeQuestionData.next(question);
    this.router.navigate(['detail'], { relativeTo: this.route });
  }
}
