import {Routes , Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';

import './App.css';
import './assets/styles/style.scss';

function App() {


  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;
