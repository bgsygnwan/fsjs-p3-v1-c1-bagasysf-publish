import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import { Provider } from 'react-redux';
import store from './stores';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
