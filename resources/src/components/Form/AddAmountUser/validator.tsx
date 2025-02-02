import { FenextjsValidator } from 'fenextjs-validator';
import { IFormAddAmountUser } from './interface';

export const FormAddAmountUserValidator =
    FenextjsValidator<IFormAddAmountUser>()
        .setName('FormAddAmountUser')
        .isObject({
            user_id: FenextjsValidator()
                .isString('User ID requerido')
                .isRequired('User ID requerido'),
            amount: FenextjsValidator()
                .isNumber('Saldo requerido')
                .isMin(0, 'Saldo requerido')
                .isRequired('Saldo requerido'),
        });
