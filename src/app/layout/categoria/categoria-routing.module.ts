import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria.component';
import { CategoriaListaComponent } from './categoriaLista.component';

const routes: Routes = [
    { path: 'novo', component: CategoriaComponent },
    { path: '', component : CategoriaListaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule {
}