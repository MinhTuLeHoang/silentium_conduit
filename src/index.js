import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { Route, Routes } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from './context/ThemeContext';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      {/* <ConnectedRouter history={history}>
        <Routes>
          <Route exact path="/" element={<App />}/>
        </Routes>
      </ConnectedRouter> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals