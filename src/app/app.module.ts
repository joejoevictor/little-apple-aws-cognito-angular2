import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {UserRegistrationService, UserLoginService, UserParametersService, CognitoUtil} from "./service/cognito.service";

import {routing} from "./app.routes";
import {HomeComponent, AboutComponent, HomeLandingComponent} from "./public/home.component";
import {
    LoginComponent, LogoutComponent, RegistrationConfirmationComponent,
    ResendCodeComponent, ForgotPasswordStep1Component, ForgotPassword2Component, RegisterComponent
} from "./public/auth/auth.component";
import {UseractivityComponent} from "./secure/useractivity.component";
import {MyProfileComponent} from "./secure/myprofile.component";
import {SecureHomeComponent} from "./secure/securehome.component";
import {JwtComponent} from "./secure/jwt.component";
import {DynamoDBService, AwsUtil} from "./service/aws.service";

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegistrationConfirmationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPassword2Component,
    RegisterComponent,
    AboutComponent,
    HomeLandingComponent,
    HomeComponent,
    UseractivityComponent,
    MyProfileComponent,
    SecureHomeComponent,
    JwtComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserRegistrationService,
    UserLoginService,
    UserParametersService,
    DynamoDBService,
    CognitoUtil,
    AwsUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
