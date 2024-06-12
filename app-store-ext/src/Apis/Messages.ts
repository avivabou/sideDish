import { DataFields, FieldsGetterSetters, MessagesAPIStructure } from "../Types/MessagesAPI";
import { ACTIONS, GET_SET_FIELDS } from "../Utils/Constants";
import { openAppPage } from "./AppStore";

const cache: Partial<DataFields> = {};

function getterOf<T extends keyof DataFields>(key: T) {
    return () => new Promise<DataFields[T] | undefined>((resolve) => {
        if (!cache[key]) {
            chrome.runtime.sendMessage({ action: `get_${key}` })
                .then((response) => {
                    cache[key] = response?.[key];
                })
        }
        resolve(cache[key]);
    })
}

function setterOf<T extends keyof DataFields>(key: T) {
    return (value: DataFields[T]) => {
        cache[key] = value;
        chrome.runtime.sendMessage({ action: `set_${key}`, value });
    }
}

async function openAppStore(useNewTab: boolean = true): Promise<void> {
    return chrome.runtime.sendMessage({ action: ACTIONS.DO.OPEN_APP_STORE, useNewTab });
}

async function contentScriptLoaded(): Promise<void> {
    return chrome.runtime.sendMessage({ action: ACTIONS.NOTIFY.CONTENT_SCRIPT_LOADED })
}

const getterSetters = (Object.values(GET_SET_FIELDS) as (keyof DataFields)[])
    .reduce((acc, field) => {
        acc[field] = {
            get: getterOf(field),
            set: setterOf(field),
        }
        return acc;
    }, {} as FieldsGetterSetters);

export const MessagesAPI: MessagesAPIStructure = {
    ...getterSetters,
    open: {
        appStore: openAppStore,
        appPage: openAppPage,
    },
    notify: {
        contentScriptLoaded,
    }
}