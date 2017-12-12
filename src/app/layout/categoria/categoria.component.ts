import { Component } from "@angular/core";
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-categoria',
    moduleId: module.id,
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.scss'],
    animations: [routerTransition()]
})
export class CategoriaComponent { 
    
}