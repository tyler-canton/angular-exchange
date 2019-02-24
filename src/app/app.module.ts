import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { QuestionsModule } from './questions/questions.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './shared/data.storage.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    QuestionsModule,
    SharedModule
  ],
  providers: [AuthService, AuthGuard, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
