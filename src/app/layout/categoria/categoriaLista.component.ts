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

    constructor(private categoriaServices: CategoriaServices) {

        categoriaServices.seleciona().subscribe(data =>{

            console.log('normal')
            this.categorias = data;

        }, error => {

            console.log('ruim')
            console.log(error);

        });

    }

}