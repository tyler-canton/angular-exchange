import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './questions/question.component';
import { QuestionStartComponent } from './questions/question-start/question-start.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
// pathMatch is designed to ensure a unique root
const appRoutes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  {
    path: 'questions',
    component: QuestionComponent,
    children: [
      { path: '', component: QuestionStartComponent },
      { path: 'detail', component: QuestionDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
