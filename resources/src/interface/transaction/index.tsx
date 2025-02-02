export enum ITransactionStatus {
    pending = 'pending',
    complete = 'complete',
    cancel = 'cancel',
}

export interface ITransaction {
    id: string;
    price: string;
    payed_at?: string;
    status: ITransactionStatus;
    description?: string;
    user_id: number;
    created_at: string;
    updated_at: string;
}
