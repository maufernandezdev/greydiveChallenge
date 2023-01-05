import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from '../pages/Home';
import Forms from '../pages/Forms';
import NotFound from '../pages/NotFound';

const mainNavigator = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/forms' element={<Forms></Forms>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>  
    )
}

export default mainNavigator