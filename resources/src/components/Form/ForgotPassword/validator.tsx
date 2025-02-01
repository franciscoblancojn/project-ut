import { FenextjsValidator } from 'fenextjs-validator';
import { IFormForgotPassword } from './interface';

export const FormForgotPasswordValidator =
    FenextjsValidator<IFormForgotPassword>()
        .setName('FormForgotPassword')
        .isObject({
            email: FenextjsValidator()
                .isString('Correo requerido')
                .isEmail('Correo invalido')
                .isRequired('Correo requerido'),
        });
