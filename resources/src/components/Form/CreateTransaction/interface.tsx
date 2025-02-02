import { ITransaction } from '@/interface/transaction';

export interface IFormCreateTransaction
    extends Partial<Pick<ITransaction, 'status' | 'description' | 'user_id'>> {
    payed_at?: Date;
    price?: number;
}
