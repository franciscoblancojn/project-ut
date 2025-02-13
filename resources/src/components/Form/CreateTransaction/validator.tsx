import { FenextjsValidator } from 'fenextjs-validator';
import { IFormCreateTransaction } from './interface';
import { ITransactionStatus } from '@/interface/transaction';

export const FormCreateTransactionValidator =
    FenextjsValidator<IFormCreateTransaction>()
        .setName('FormCreateTransaction')
        .isObject({
            user_id: FenextjsValidator()
                .isString('User ID requerido')
                .isRequired('User ID requerido'),
            price: FenextjsValidator()
                .isNumber('Precio requerido')
                .isMin(0, 'Precio requerido')
                .isRequired('Precio requerido'),
            status: FenextjsValidator()
                .isEnum(ITransactionStatus, 'Estatus requerido')
                .isRequired('Estatus requerido'),
        });
