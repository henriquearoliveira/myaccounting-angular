import { Component, OnInit } from "@angular/core";
import { Http, Headers, URLSearchParams } from '@angular/http';
// import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ServicesAbstract } from '../servicesAbstract/servicesAbstract.services';
import { Usuario } from '../business/usuario/usuario';

// FOR AUTHENTICATION
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { error } from "selenium-webdriver";


import { routerTransition } from '../router.animations';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    
    usuario: Usuario = new Usuario();
    uri: string = '/login';
    errorMessage: string = null;

    meuFormLogin: FormGroup;

    constructor(
        private services: ServicesAbstract,
        private router: Router,
        private authenticationService: AuthenticationService,
        private formbuilder: FormBuilder) {

        
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        this.meuFormLogin = this.formbuilder.group({
            
                        email: ['',Validators.compose([Validators.required, Validators.email])],
                        senha: ['',Validators.required]
            
                    });
            
    }

    isFieldValid(field: string) {
        return !this.meuFormLogin.get(field).valid && this.meuFormLogin.get(field).touched;
    }
    
    displayFieldCss(field: string) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    }

    cadastrar(event) {

        event.preventDefault();

        console.log('aqui');
        
        if (this.meuFormLogin.valid) {
          this.logaUsuario();
        } else {
          this.validateAllFormFields(this.meuFormLogin);
        }
      }
    
      validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
          const control = formGroup.get(field);
          if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
          }
        });
      }

    logaUsuario() {

        this.authenticationService.login(this.usuario)
            .subscribe(result => {

                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {
                    console.log('Deu ruim galera');
                    
                }
            }, error => {
                console.log("deu bosta");
                this.errorMessage = "Email ou senha inválidos";
            });
    }

    // onLoggedin() {
    //     localStorage.setItem('isLoggedin', 'true');
    // }
}
