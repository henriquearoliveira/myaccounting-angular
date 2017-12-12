import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriaRoutingModule } from "./categoria-routing.module";
import { CategoriaComponent } from './categoria.component'
import { CategoriaListaComponent } from './categoriaLista.component'
import { PageHeaderModule } from './../../shared'

@NgModule({
    imports: [CommonModule, CategoriaRoutingModule, PageHeaderModule],
    declarations: [CategoriaComponent, CategoriaListaComponent]
})
export class CategoriaModule{ }