import { Component, OnInit } from "@angular/core";
import { routerTransition } from '../../router.animations';
import { ServicesAbstract } from "../../servicesAbstract/servicesAbstract.services";

import { Categoria } from "../../business/categoria/categoria";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TipoDeCategoria } from "../../business/categoria/tipoDeCategoria";
import { FormControlValidatin } from "../../business/comum/form-control-validatin";

@Component({
    selector: 'app-categoria',
    moduleId: module.id,
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.scss'],
    animations: [routerTransition()]
})
export class CategoriaComponent extends FormControlValidatin {

    categoria: Categoria = new Categoria;
    uri: string = '/categoria';

    tipoDeCategorias = Object.values(TipoDeCategoria);

    formCategoria: FormGroup;

    constructor(private services: ServicesAbstract, private formBuilder: FormBuilder) {

        super();

        this.formCategoria = this.formBuilder.group({

            descricao: ['', Validators.required],
            tipoDeCategoria: ['', Validators.required],
            observacao: []

        });

        super.setFormulario(this.formCategoria);

    }

    cadastrar(event) {

        event.preventDefault();

        console.log('aqui');

        console.log(this.formCategoria.valid);

        if (this.formCategoria.valid) {
            console.log('deu bom');
        } else {
            this.validateAllFormFields(this.formCategoria);
        }
    }

}