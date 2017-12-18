import { Component } from "@angular/core";
import { routerTransition } from '../../router.animations';
import { Categoria } from "../../business/categoria/categoria";
import { CategoriaServices } from "../../business/categoria/services/categoria.service";
import { error } from "util";


@Component({
    selector: 'app-categoria-lista',
    moduleId: module.id,
    templateUrl: './categoriaLista.component.html',
    styleUrls: ['./categoriaLista.component.scss'],
    animations: [routerTransition()]
})
export class CategoriaListaComponent { 

    categorias: Categoria[]
    errorMessage: string

    constructor(private categoriaServices: CategoriaServices) {

        categoriaServices.seleciona().subscribe(data =>{

            console.log('normal')
            this.categorias = data;

        }, error => {

            this.errorMessage = this.categoriaServices
            .servicesAbstract.trataErrorMessage(error.status)
            console.log(error);

        });

    }

}