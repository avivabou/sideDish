import { ACTIONS } from '../Utils/Constants';
import { openAppStore } from '../Apis/AppStore';

let logoHTML;
let userEmail = undefined;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.action) {
        // DO ACTIONS
        case ACTIONS.DO.OPEN_APP_STORE:
            openAppStore(message.useNewTab);
            break;
        // SET ACTIONS
        case ACTIONS.SET.USER_EMAIL:
            userEmail = message.value;
            sendResponse({ status: 'user email stored successfully' });
            break;
        case ACTIONS.SET.APP_LOGO:
            logoHTML = message.value;
            sendResponse({ status: 'Logo stored successfully' });
            break;
        // GET ACTIONS
        case ACTIONS.GET.USER_EMAIL:
            sendResponse({ userEmail });
            break;
        case ACTIONS.GET.APP_LOGO:
            sendResponse({ logoHTML });
            break;
        // DEFAULT
        default:
            sendResponse({ status: 'unknown action' });
            break;
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log('Service Worker Installed');
});
