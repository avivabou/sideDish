import { GET_SET_FIELDS } from "../Utils/Constants";

type DataFields = {
    userEmail: string,
    appLogo: string,
}

type FieldsGetterSetters = {
    // "& typeof GET_SET_FIELDS[keyof typeof GET_SET_FIELDS]" - validation of supported keys by message types
    [K in keyof DataFields & typeof GET_SET_FIELDS[keyof typeof GET_SET_FIELDS]]: {
        get: () => Promise<DataFields[K] | undefined>;
        set: (value: DataFields[K]) => void;
    };
}

type MessagesAPIStructure = FieldsGetterSetters & {
    open: {
        [key: string]: Function;
    };
    notify: {
        [key: string]: Function;
    };
};

export type {
    DataFields,
    FieldsGetterSetters,
    MessagesAPIStructure,
}