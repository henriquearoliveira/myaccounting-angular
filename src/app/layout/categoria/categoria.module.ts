import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriaRoutingModule } from "./categoria-routing.module";
import { CategoriaComponent } from './categoria.component';
import { CategoriaListaComponent } from './categoriaLista.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesAbstract } from "../../servicesAbstract/servicesAbstract.services";

import { FormControlValidatin } from '../../business/comum/form-control-validatin'

import { CategoriaServices } from '../../business/categoria/services/categoria.service'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [CommonModule, CategoriaRoutingModule,
        PageHeaderModule, FormsModule, ReactiveFormsModule,
    NgbModule.forRoot()], // TEM QUE IMPORTAR ESSA POHA KKKKKKKKKKKKKKKKK PARA O FUNCIONAMENTO DO NGB DO BOOTSTRAP
    declarations: [CategoriaComponent, CategoriaListaComponent],
    providers: [ServicesAbstract, FormControlValidatin, CategoriaServices]
})
export class CategoriaModule{ }