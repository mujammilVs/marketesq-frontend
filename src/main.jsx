// src/index.js


import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import App from './App.jsx';
import './index.css'
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <App/>
    </Provider>
    
)