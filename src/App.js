import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import City from './pages/City/City';
import About from './pages/About/About';
function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/city"} component={City} />
      <Route exact path={"/about"} component={About} />
    </div>
  );
}

export default App;
