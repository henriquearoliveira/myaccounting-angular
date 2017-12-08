import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesAbstract } from '../servicesAbstract/servicesAbstract.services';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [LoginComponent],
    providers: [ ServicesAbstract ]
})
export class LoginModule {}
