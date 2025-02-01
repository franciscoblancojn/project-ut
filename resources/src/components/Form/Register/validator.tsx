import { FenextjsValidator } from 'fenextjs-validator';
import { IFormRegister } from './interface';

export const FormRegisterValidator = FenextjsValidator<IFormRegister>()
    .setName('FormRegister')
    .isObject({
        name: FenextjsValidator()
            .isString('Nombre requerido')
            .isRequired('Nombre requerido'),
        email: FenextjsValidator()
            .isString('Correo requerido')
            .isEmail('Correo invalido')
            .isRequired('Correo requerido'),
        password: FenextjsValidator()
            .isString('Contraseña requerida')
            .isRequired('Contraseña requerida')
            .isMinOrEqual(7, 'La Contraseña es muy corta'),
        repeactPassword: FenextjsValidator().isCompareRef(
            'password',
            'La Contraseña no coincide',
        ),
    });
