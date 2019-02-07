import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './questions/question.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { QuestionItemComponent } from './questions/question-list/question-item/question-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { QuestionStartComponent } from './questions/question-start/question-start.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { SanitizeHtmlPipe } from './shared/sanitize.pipe';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionItemComponent,
    DropdownDirective,
    QuestionStartComponent,
    ShortenPipe,
    SanitizeHtmlPipe,
    SignupComponent,
    SigninComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
