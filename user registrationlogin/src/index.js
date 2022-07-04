import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';

import './index.css'; 
import App from './App';
import Cmregistration from './Cmregistration';
ReactDOM.render( 
  <BrowserRouter>
	<div>
	  <Routes>
  <Route exact path='/Cmregistration' element={< Cmregistration />}></Route>,
  <Route exact path='/' element={< App />}></Route>,

  </Routes>
  
	</div>
  
    </BrowserRouter>
   , document.getElementById('root')
);

 
