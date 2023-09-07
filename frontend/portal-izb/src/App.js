import React from 'react';
import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HomePage, 
  News, 
  Forum,
  Literature,
  Shop,
  ContactPage} from './Pages';

function App() {
  function Whoops404(){
    let location = useLocation();
    console.log(location);
    return(
      <div>
        <h1>Nie znaleziono zasobu pod adresem "{location.pathname}".</h1>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>

      <Route path="/home" element={<HomePage/>}/>

      <Route path="/news" element={<News/>}/>

      <Route path="/forum" element={<Forum/>}/>

      <Route path="/literature" element={<Literature/>}/>

      <Route path="/shop" element={<Shop/>}/>

      <Route path="/contact" element={<ContactPage/>}/>

      <Route path="/*" element={ <Whoops404/> }/>

    </Routes>  
  );
}

export default App;
