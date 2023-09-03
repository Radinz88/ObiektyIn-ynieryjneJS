import './App.css';
import LoginBar from './components/LoginBar/LoginBar';
import MainImage from './components/MainImage';
import MenuBar from './components/MenuBar';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  return (
    <div className="App">
      <LoginBar />
      <MainImage />
      <MenuBar />
      <Home />
    </div>
  );
}

export default App;
