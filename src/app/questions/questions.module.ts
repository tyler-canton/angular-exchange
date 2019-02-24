import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionStartComponent } from './question-start/question-start.component';
import { QuestionComponent } from './question.component';
import { QuestionsRoutingModule } from './questions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionsRoutingModule,
    SharedModule

  ],
  exports: [],
  declarations: [
    QuestionComponent,
    QuestionStartComponent,
    QuestionListComponent,
    QuestionItemComponent,
    QuestionDetailComponent,

  ],
  providers: [],
})
export class QuestionsModule { }
