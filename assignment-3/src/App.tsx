// import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import './style.css';
//! Provider
import { RouterProvider } from 'react-router-dom';
import { AppStoreProvider } from './store';
import { AppRouter } from './routes';
//! imp Datas Seed
import { generateData } from './fakeDatabase';

generateData();

function App() {
  return (
    <div className="App">
      <AppStoreProvider>
        <div className="container--fluid">
          <RouterProvider router={AppRouter} />
        </div>
      </AppStoreProvider>
    </div>
  );
}

export default App;
