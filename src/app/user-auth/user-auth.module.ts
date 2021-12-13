import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpComponent } from './otp/otp.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { MailSendComponent } from './mail-send/mail-send.component';



@NgModule({
  declarations: [
    OtpComponent,
    EmailVerificationComponent,
    MailSendComponent
  ],
  imports: [
    CommonModule
  ],exports:[
     OtpComponent,
     EmailVerificationComponent,
     MailSendComponent
  ]
})
export class UserAuthModule { }
