import { injectAppStoreButton } from '../Components/AppStoreButton/AppStoreButtonInjector'
import { SELECTORS } from '../Utils/Constants'
import { MessagesAPI } from '../Apis/Messages';

const observer = new MutationObserver(() => {
    injectAppStoreButton();
});

const observeDOMChanges = () => {
    const accountBar = document.querySelector(SELECTORS.ACCOUNT_BAR);
    if (accountBar) {
        injectAppStoreButton();
        observer.observe(document.body, { childList: true, subtree: true });
    }

    const logoComponent = document.querySelector(SELECTORS.LOGO);

    if (logoComponent) {
        MessagesAPI.appLogo.set(logoComponent.innerHTML.toString())
    }

    MessagesAPI.notify.contentScriptLoaded().then(response => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        } else {
            console.log("Content script loaded successfully");
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    observeDOMChanges();
});

observeDOMChanges();
