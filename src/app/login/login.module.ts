import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }