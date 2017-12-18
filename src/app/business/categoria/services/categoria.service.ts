import { Injectable } from '@angular/core';
import { ServicesAbstract } from '../../../servicesAbstract/servicesAbstract.services';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class CategoriaServices {

    uri: string = '/categoria';

    servicesAbstract: ServicesAbstract

    constructor(servicesAbstract: ServicesAbstract) {
        this.servicesAbstract = servicesAbstract
     }

    salvaCategoria(categoria: Categoria): Observable<Response> {

        return this.servicesAbstract.cadastra(categoria, this.uri);

    }

    seleciona(): Observable<Array<Categoria>> {

        return this.servicesAbstract.seleciona<Categoria>(this.uri+'/lista');

    }

}