
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import App from './App.jsx';
import './index.css'
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
<StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
    </StrictMode>
    
)