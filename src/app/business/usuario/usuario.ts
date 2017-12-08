import { BeanIdentificavel } from '../comum/beanidentificavel';

export class Usuario extends BeanIdentificavel {

    // private UploadImage uploadImage;

    email: string;
    senha: string;

    // NÃO FUNFA LEGAL GET E SETTER
    // get emailUsuario(): string {
    //     return this.email;
    // }

    // set emailUsuario(email: string) {
    //     this.email = email;
    // }

    // get senhaUsuario(): string {
    //     return this.senha;
    // }

    // set senhaUsuario(senha: string) {
    //     this.senha = senha;
    // }

}