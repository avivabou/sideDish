import { MessagesAPI } from './Messages';

async function openAppStore(useNewTab: boolean) {
  const email = MessagesAPI.userEmail.get() as unknown as string;

  if (email) {
    const encodedEmail = encodeURIComponent(email);
    const url = chrome.runtime.getURL('appStorePage.html');
    const newTabUrl = `${url}?email=${encodedEmail}`;

    if (useNewTab) {
      chrome.tabs.create({ url: newTabUrl });
      return Promise.resolve();
      
    } else {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

      if (tabs && tabs.length > 0 && tabs[0].id) {
        chrome.tabs.update(tabs[0].id, { url: newTabUrl });
        return Promise.resolve();
      } else {
        return Promise.reject("No active tab found");
      }
    }
  }

  return Promise.reject("No user logged in");
}

async function openAppPage(appId: string) {
  const encodedId = encodeURIComponent(appId);
  const appPageUrl = chrome.runtime.getURL(`appPage.html?id=${encodedId}`);
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tabs && tabs.length > 0 && tabs[0].id) {
    chrome.tabs.update(tabs[0].id, { url: appPageUrl });
    return Promise.resolve();
  } else {
    return Promise.reject("No active tab found");
  }
}

export {
  openAppStore,
  openAppPage
}