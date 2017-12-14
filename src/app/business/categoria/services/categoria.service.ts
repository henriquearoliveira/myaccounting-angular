import { Injectable } from '@angular/core';
import { ServicesAbstract } from '../../../servicesAbstract/servicesAbstract.services';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class CategoriaServices {

    uri: string = '/categoria';

    constructor(private services: ServicesAbstract) { }

    salvaCategoria(categoria: Categoria): Observable<Response> {

        return this.services.cadastra(categoria, this.uri);

    }

}