import { LanguageListProps } from 'fenextjs';

export type LIST_LANGS_TYPE = ['es', 'en'];
export const LIST_LANGS: LIST_LANGS_TYPE = ['es', 'en'];

export const LANGUAGE_LIST: LanguageListProps<LIST_LANGS_TYPE> = {
    'Gracias por usar Fenextjs. Esta plantilla tiene una estructura que te ayudará a usar fenextjs.':
        {
            es: 'Gracias por usar Fenextjs. Esta plantilla tiene una estructura que te ayudará a usar fenextjs.',
            en: 'Thank you for using Fenextjs. This template has a structure that will help you use Fenextjs.',
        },
    'Recuerda que puedes agregar todos los componentes de fenextjs, que necesites, a la carpeta ui-fenextjs, para personalizarlo en estilos o agregarle mas funcionalidades':
        {
            es: 'Recuerda que puedes agregar todos los componentes de fenextjs, que necesites, a la carpeta ui-fenextjs, para personalizarlo en estilos o agregarle mas funcionalidades',
            en: 'Remember that you can add all the Fenextjs components you need to the ui-fenextjs folder to customize it with styles or add more functionalities.',
        },
    'Esta plantilla tiene un ejemplo de cómo crear un componente de login y un sistema simple de traducciones.':
        {
            es: 'Esta plantilla tiene un ejemplo de cómo crear un componente de login y un sistema simple de traducciones.',
            en: 'This template has an example of how to create a login component and a simple translation system.',
        },
    'Fenextjs Documentación': {
        es: 'Fenextjs Documentación',
        en: 'Fenextjs Documentation',
    },
    Correo: {
        es: 'Correo',
        en: 'Email',
    },
    Contraseña: {
        es: 'Contraseña',
        en: 'Password',
    },
    Enviar: {
        es: 'Enviar',
        en: 'Submit',
    },
    'Correo requerido': {
        es: 'Correo requerido',
        en: 'Email required',
    },
    'Correo invalido': {
        es: 'Correo invalido',
        en: 'Email invalid',
    },
    'Contraseña requerida': {
        es: 'Contraseña requerida',
        en: 'Password required',
    },
    Entrar: {
        en: 'Login',
        es: 'Entrar',
    },
    Idiomas: {
        es: 'Idiomas',
        en: 'Languages',
    },
};
