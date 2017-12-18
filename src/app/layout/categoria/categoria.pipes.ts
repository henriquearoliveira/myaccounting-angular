import { Pipe, PipeTransform } from "@angular/core";
import { Categoria } from "../../business/categoria/categoria";


@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(categorias: Categoria[], digitado: string){

        if (!digitado)
            return categorias;

        return categorias.filter(c => c.descricao.toLowerCase().includes(digitado.toLowerCase()));

    }
 }