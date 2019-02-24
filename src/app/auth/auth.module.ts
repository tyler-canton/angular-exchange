import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  exports: [],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  providers: [],
})
export class AuthModule { }
