import { useLanguage } from 'fenextjs';
import { LANGUAGE_LIST, LIST_LANGS_TYPE, LIST_LANGS } from './langs';

export type LANGS_TYPE = LIST_LANGS_TYPE[number];

export const useLang = () => {
    return useLanguage<LIST_LANGS_TYPE>({
        langs: LIST_LANGS,
        listTranductions: LANGUAGE_LIST,
        defaultLang: 'es',
    });
};
