import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PhonebookContext } from 'components/PhonebookContext/PhonebookContext';

import { LOCAL_KEY } from "constants/localKey";
const isStorageContacts = JSON.parse(localStorage.getItem(LOCAL_KEY));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhonebookContext.Provider value={{ contacts: isStorageContacts || [], filter: "" }}>
      <App />
    </PhonebookContext.Provider>
  </React.StrictMode>
);
