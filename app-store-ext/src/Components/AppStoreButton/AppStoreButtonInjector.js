import React from 'react';
import ReactDOM from 'react-dom';
import AppStoreButton from './AppStoreButton';
import { SELECTORS } from '../../Utils/Constants'
import { MessagesAPI } from '../../Apis/Messages';

let validatedEmail = await MessagesAPI.userEmail.get();

const login = async () => {
  const email = prompt('Please enter your email:');
  const regexValidator = /.+@.+\..+/;
  if (email) {
    if (regexValidator.test(email)) {
        validatedEmail = email;
        MessagesAPI.userEmail.set(validatedEmail)
    } else {
      alert(`${email} isn't a valid email.`);
    }
  } else {
    alert('No email entered.');
  }
};

const onClick = async () => {
  if (!validatedEmail) {
    await login()
  }
  if (validatedEmail) {
    MessagesAPI.open.appStore();
  }
};


export function injectAppStoreButton() {
    const accountBar = document.querySelector(SELECTORS.ACCOUNT_BAR);

    if (accountBar && !document.getElementById('appStoreButton')) {
        const div = document.createElement('div');
        div.id = 'appStoreButtonContainer';
        accountBar.prepend(div);
        ReactDOM.render(<AppStoreButton onClick={onClick}/>, div);
    }
}