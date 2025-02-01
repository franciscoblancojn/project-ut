import { FenextjsValidator } from 'fenextjs-validator';
import { IFormChangePassword } from './interface';

export const FormChangePasswordValidator =
    FenextjsValidator<IFormChangePassword>()
        .setName('FormChangePassword')
        .isObject({
            token: FenextjsValidator()
                .isString('Nombre requerido')
                .isRequired('Nombre requerido'),
            password: FenextjsValidator()
                .isString('Contraseña requerida')
                .isRequired('Contraseña requerida')
                .isMinOrEqual(7, 'La Contraseña es muy corta'),
            repeactPassword: FenextjsValidator().isCompareRef(
                'password',
                'La Contraseña no coincide',
            ),
        });
