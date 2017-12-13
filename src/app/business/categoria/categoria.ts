import { BeanIdentificavel } from '../comum/beanidentificavel'
import { Usuario } from '../usuario/usuario'
import { TipoDeCategoria } from './tipoDeCategoria';

export class Categoria extends BeanIdentificavel { 

    usuario: Usuario;
    descricao: string;
    tipoDeCategoria: TipoDeCategoria;
    observacao: string;

}