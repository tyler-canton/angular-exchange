import { QuestionComponent } from './question.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionStartComponent } from './question-start/question-start.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';

const questionsRoutes: Routes = [
  {
    path: 'questions',
    component: QuestionComponent,
    children: [
      { path: '', component: QuestionStartComponent },
      { path: 'detail', component: QuestionDetailComponent, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(questionsRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class QuestionsRoutingModule { }
