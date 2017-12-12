import { Component } from "@angular/core";
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-categoria-lista',
    moduleId: module.id,
    templateUrl: './categoriaLista.component.html',
    styleUrls: ['./categoriaLista.component.scss'],
    animations: [routerTransition()]
})
export class CategoriaListaComponent { }