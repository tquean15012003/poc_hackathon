import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// config react router dom
import { BrowserRouter } from 'react-router-dom';

// config redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore'

// tw-elements
import 'tw-elements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
