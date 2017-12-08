import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../../../services/authentication.service';
import { Usuario } from '../usuario';
import { ServicesAbstract } from '../../../servicesAbstract/servicesAbstract.services';

@Injectable()
export class UserService {

    constructor(
        private servicesAbstract: ServicesAbstract) {
    }

    getUsuario(idUsuario: number): Observable<Usuario> {

        // GET USER BY ID FROM API
        return this.servicesAbstract.get<Usuario>('/usuario/' + idUsuario);
    }
}