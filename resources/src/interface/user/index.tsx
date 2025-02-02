export interface IUser {
    id: string;
    name: string;
    email: string;
    amount: string;
    role:'admin'|'client'
    created_at: string;
    updated_at: string;
}
