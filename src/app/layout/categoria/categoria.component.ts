import { Component, OnInit } from "@angular/core";
import { routerTransition } from '../../router.animations';

import { Categoria } from "../../business/categoria/categoria";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TipoDeCategoria } from "../../business/categoria/tipoDeCategoria";
import { FormControlValidatin } from "../../business/comum/form-control-validatin";
import { CategoriaServices } from "../../business/categoria/services/categoria.service";
import { error } from "selenium-webdriver";

@Component({
    selector: 'app-categoria',
    moduleId: module.id,
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.scss'],
    animations: [routerTransition()]
})
export class CategoriaComponent extends FormControlValidatin {

    categoria: Categoria = new Categoria();
    uri: string = '/categoria';
    successMessage: string;
    errorMessage: string;

    tipoDeCategorias = Object.values(TipoDeCategoria);

    formCategoria: FormGroup;

    constructor(private services: CategoriaServices, private formBuilder: FormBuilder) {

        super()

        this.configuraFormCategoria()

        super.setFormulario(this.formCategoria)

    }

    configuraFormCategoria() {

        this.formCategoria = this.formBuilder.group({
            
            descricao: ['', Validators.required],
            tipoDeCategoria: ['', Validators.required],
            observacao: []
            
        });
    }

    cadastrar(event) {

        event.preventDefault();

        if (this.formCategoria.valid) {
            this.salvaCategoria()
        } else {
            this.validateAllFormFields(this.formCategoria)
        }
    }

    salvaCategoria() {

        this.services.salvaCategoria(this.categoria).subscribe(cat => {

            console.log(cat.status)

            if (cat.status == 201) {
                
                this.successMessage = 'Categoria salva com sucesso'
                
                this.formCategoria.reset()
            }

        }, error => {

            if (error.status == 400) {
                this.errorMessage = 'Categoria não suportada.'
            }

        })

    }

}