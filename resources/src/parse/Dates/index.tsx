import { parseDateTimeFormat } from 'fenextjs-functions';
export type DateValue = Date | string | undefined | null | number;
export interface parseDateOptions {
    locales?: string;
}

export const parseDateTimeFormat_Long = (
    date: DateValue,
    options?: parseDateOptions,
) => {
    if (date === undefined || date === null) {
        return null;
    }
    return parseDateTimeFormat(new Date(date ?? 0), {
        locales: options?.locales ?? 'es-ES',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
};

export const parseDateTimeFormat_DD_MM_YY = (
    date: DateValue,
    options?: parseDateOptions,
) => {
    if (date === undefined || date === null) {
        return null;
    }
    return parseDateTimeFormat(new Date(date ?? 0), {
        locales: options?.locales ?? 'es-ES',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    });
};
export const parseDateTimeFormat_DD_MM = (
    date: DateValue,
    options?: parseDateOptions,
) => {
    if (date === undefined || date === null) {
        return null;
    }
    return parseDateTimeFormat(new Date(date ?? 0), {
        locales: options?.locales ?? 'es-ES',
        month: '2-digit',
        day: '2-digit',
    });
};

export const parseDateTimeFormat_Hours_Minutes_AM_PM = (
    date: DateValue,
    options?: parseDateOptions,
) => {
    if (date === undefined || date === null) {
        return null;
    }
    return parseDateTimeFormat(new Date(date ?? 0), {
        locales: options?.locales ?? 'es-ES',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const parseDateTimeFormat_Table = (
    date: DateValue,
    options?: parseDateOptions,
) => {
    if (date === undefined || date === null) {
        return null;
    }
    return parseDateTimeFormat(new Date(date ?? 0), {
        locales: options?.locales ?? 'es-ES',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
};

export const parseDistanceTime = (
    init: Date | string | number,
    final?: Date | string | number,
) => {
    const time =
        new Date(init)?.getTime() - new Date(final ?? new Date())?.getTime();
    let text = 'Faltan: ';
    if (time < 0) {
        text = 'Fue hace: ';
    }

    let TimeText = '';

    let timeX = 1000 * 60 * 60 * 24 * 30;
    let timeP = Math.abs(time);

    const moth = Math.trunc(timeP / timeX);
    if (moth > 0) {
        TimeText += `${moth} mes${moth > 1 ? 'es' : ''} `;
    }
    timeP = timeP - moth * timeX;
    timeX = timeX / 30;

    const days = Math.trunc(timeP / timeX);
    if (days > 0) {
        TimeText += `${days} dia${days > 1 ? 's' : ''} `;
    }
    timeP = timeP - days * timeX;
    timeX = timeX / 24;

    const hours = Math.trunc(timeP / timeX);
    if (hours > 0) {
        TimeText += `${hours} hora${hours > 1 ? 's' : ''} `;
    }
    timeP = timeP - hours * timeX;
    timeX = timeX / 60;

    const min = Math.trunc(timeP / timeX);
    if (min > 0) {
        TimeText += `${min} minuto${min > 1 ? 's' : ''} `;
    }

    return text + TimeText;
};
