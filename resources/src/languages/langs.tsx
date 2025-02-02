import { LanguageListProps } from 'fenextjs';

export type LIST_LANGS_TYPE = ['es', 'en', 'x'];
export const LIST_LANGS: LIST_LANGS_TYPE = ['es', 'en', 'x'];

export const LANGUAGE_LIST: LanguageListProps<LIST_LANGS_TYPE> = {
    '10': { es: '10', en: '10', x: 'x' },
    'Tema oscuro': { es: 'Tema oscuro', en: 'Dark theme', x: 'x' },
    Perfil: { es: 'Perfil', en: 'Profile', x: 'x' },
    Usuarios: { es: 'Usuarios', en: 'Users', x: 'x' },
    Transacciones: { es: 'Transacciones', en: 'Transactions', x: 'x' },
    Salir: { es: 'Salir', en: 'Logout', x: 'x' },
    'Informacion Personal': {
        es: 'Informacion Personal',
        en: 'Personal Information',
        x: 'x',
    },
    'Usuario:': { es: 'Usuario:', en: 'User:', x: 'x' },
    'Saldo:': { es: 'Saldo:', en: 'Balance:', x: 'x' },
    'Nombre :': { es: 'Nombre :', en: 'Name :', x: 'x' },
    'Email :': { es: 'Email :', en: 'Email :', x: 'x' },
    'Fecha de Creacion :': {
        es: 'Fecha de Creacion :',
        en: 'Creation Date :',
        x: 'x',
    },
    'Fecha de Actualizacion :': {
        es: 'Fecha de Actualizacion :',
        en: 'Update Date :',
        x: 'x',
    },
    'Aqui puedes gestionar tus usuarios': {
        es: 'Aqui puedes gestionar tus usuarios',
        en: 'Here you can manage your users',
        x: 'x',
    },
    ID: { es: 'ID', en: 'ID', x: 'x' },
    Nombre: { es: 'Nombre', en: 'Name', x: 'x' },
    Correo: { es: 'Correo', en: 'Email', x: 'x' },
    Saldo: { es: 'Saldo', en: 'Balance', x: 'x' },
    'Fecha de Creacion': {
        es: 'Fecha de Creacion',
        en: 'Creation Date',
        x: 'x',
    },
    'Fecha de Actualizacion': {
        es: 'Fecha de Actualizacion',
        en: 'Update Date',
        x: 'x',
    },
    Clear: { es: 'Clear', en: 'Clear', x: 'x' },
    'Aqui puedes gestionar tus transacciones': {
        es: 'Aqui puedes gestionar tus transacciones',
        en: 'Here you can manage your transactions',
        x: 'x',
    },
    'Estado de Transaccion': {
        es: 'Estado de Transaccion',
        en: 'Transaction Status',
        x: 'x',
    },
    Precio: { es: 'Precio', en: 'Price', x: 'x' },
    'Fecha de Pago': { es: 'Fecha de Pago', en: 'Payment Date', x: 'x' },
    Estado: { es: 'Estado', en: 'Status', x: 'x' },
    Descripccion: { es: 'Descripccion', en: 'Description', x: 'x' },
    'No pagado': { es: 'No pagado', en: 'Not paid', x: 'x' },
    Pendiente: { es: 'Pendiente', en: 'Pending', x: 'x' },
    Cancelado: { es: 'Cancelado', en: 'Canceled', x: 'x' },
    Completado: { es: 'Completado', en: 'Completed', x: 'x' },
    Atras: { es: 'Atras', en: 'Back', x: 'x' },
    'Agregar Saldo': { es: 'Agregar Saldo', en: 'Add Balance', x: 'x' },
    'Transacciones:': { es: 'Transacciones:', en: 'Transactions:', x: 'x' },
    'Crear Transaccion': {
        es: 'Crear Transaccion',
        en: 'Create Transaction',
        x: 'x',
    },
    Enviar: { es: 'Enviar', en: 'Send', x: 'x' },
    Estatus: { es: 'Estatus', en: 'Status', x: 'x' },
    '*': { es: '*', en: '*', x: 'x' },
    Descripcion: { es: 'Descripcion', en: 'Description', x: 'x' },
    '(Opcional)': { es: '(Opcional)', en: '(Optional)', x: 'x' },
    Crear: { es: 'Crear', en: 'Create', x: 'x' },
    'No se encontraron resultados': {
        es: 'No se encontraron resultados',
        en: 'No results found',
        x: 'x',
    },
    'Este es el Proyecto Users / Transacctions.': {
        es: 'Este es el Proyecto Users / Transacctions.',
        en: 'This is the Users / Transactions Project.',
        x: 'x',
    },
    'Espero les guste la integracion que hice con Laravel como Backend y vite, react y fenextjs como fronted':
        {
            es: 'Espero les guste la integracion que hice con Laravel como Backend y vite, react y fenextjs como fronted',
            en: 'I hope you like the integration I made with Laravel as the Backend and Vite, React, and Fenextjs as the frontend',
            x: 'x',
        },
    'Es mi primera ves trabajando con Laravel espero les guste mi codigo.': {
        es: 'Es mi primera ves trabajando con Laravel espero les guste mi codigo.',
        en: 'This is my first time working with Laravel, I hope you like my code.',
        x: 'x',
    },
    'Pueden usar useAdmin el cual tiene acceso a todos los usuarios y transacciones:':
        {
            es: 'Pueden usar useAdmin el cual tiene acceso a todos los usuarios y transacciones:',
            en: 'You can use useAdmin, which has access to all users and transactions:',
            x: 'x',
        },
    Usuario: { es: 'Usuario', en: 'User', x: 'x' },
    Contraseña: { es: 'Contraseña', en: 'Password', x: 'x' },
    'O usar useClient el cual solo puede acceder a su informacion y sus transacciones':
        {
            es: 'O usar useClient el cual solo puede acceder a su informacion y sus transacciones',
            en: 'Or use useClient, which can only access their information and transactions',
            x: 'x',
        },
    'Pueden ver Fenextjs(Libreria desarrollada por mi) aqui': {
        es: 'Pueden ver Fenextjs(Libreria desarrollada por mi) aqui',
        en: 'You can see Fenextjs (Library developed by me) here',
        x: 'x',
    },
    Entrar: { es: 'Entrar', en: 'Login', x: 'x' },
    Registrate: { es: 'Registrate', en: 'Sign up', x: 'x' },
    'Olvidates la Contraseña': {
        es: 'Olvidates la Contraseña',
        en: 'Forgot Password',
        x: 'x',
    },
    'Correo invalido': { es: 'Correo invalido', en: 'Invalid Email', x: 'x' },
    '[FormLogin.email]': {
        es: '[FormLogin.email]',
        en: '[FormLogin.email]',
        x: 'x',
    },
    'Correo requerido': {
        es: 'Correo requerido',
        en: 'Email required',
        x: 'x',
    },
    'Contraseña requerida': {
        es: 'Contraseña requerida',
        en: 'Password required',
        x: 'x',
    },
    '[FormLogin.password]': {
        es: '[FormLogin.password]',
        en: '[FormLogin.password]',
        x: 'x',
    },
    'Credenciales inválidas': {
        es: 'Credenciales inválidas',
        en: 'Invalid credentials',
        x: 'x',
    },
    'Repite la Contraseña': {
        es: 'Repite la Contraseña',
        en: 'Repeat Password',
        x: 'x',
    },
    'Nombre requerido': { es: 'Nombre requerido', en: 'Name required', x: 'x' },
    '[FormRegister.name]': {
        es: '[FormRegister.name]',
        en: '[FormRegister.name]',
        x: 'x',
    },
    '[FormRegister.email]': {
        es: '[FormRegister.email]',
        en: '[FormRegister.email]',
        x: 'x',
    },
    'La Contraseña es muy corta': {
        es: 'La Contraseña es muy corta',
        en: 'The password is too short',
        x: 'x',
    },
    '[FormRegister.password]': {
        es: '[FormRegister.password]',
        en: '[FormRegister.password]',
        x: 'x',
    },
    'La Contraseña no coincide': {
        es: 'La Contraseña no coincide',
        en: 'The password does not match',
        x: 'x',
    },
    '[FormRegister.repeactPassword]': {
        es: '[FormRegister.repeactPassword]',
        en: '[FormRegister.repeactPassword]',
        x: 'x',
    },
};
