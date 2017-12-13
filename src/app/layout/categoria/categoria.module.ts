import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriaRoutingModule } from "./categoria-routing.module";
import { CategoriaComponent } from './categoria.component';
import { CategoriaListaComponent } from './categoriaLista.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesAbstract } from "../../servicesAbstract/servicesAbstract.services";

import { FormControlValidatin } from '../../business/comum/form-control-validatin'

@NgModule({
    imports: [CommonModule, CategoriaRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
    declarations: [CategoriaComponent, CategoriaListaComponent],
    providers: [ServicesAbstract, FormControlValidatin]
})
export class CategoriaModule{ }