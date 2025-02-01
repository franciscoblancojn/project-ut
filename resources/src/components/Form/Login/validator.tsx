import { FenextjsValidator } from 'fenextjs-validator';
import { IFormLogin } from './interface';

export const FormLoginValidator = FenextjsValidator<IFormLogin>()
    .setName('FormLogin')
    .isObject({
        email: FenextjsValidator()
            .isString('Correo requerido')
            .isEmail('Correo invalido')
            .isRequired('Correo requerido'),
        password: FenextjsValidator()
            .isString('Contraseña requerida')
            .isRequired('Contraseña requerida'),
    });
