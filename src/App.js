import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
    </Provider>
  );
}

export default App;
