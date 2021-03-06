import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
