import React from "react";
import  {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider} from './Contex/AuthContex';
import {StateProvider} from './StateProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMy from "./NavbarMy";
// import Cta from './Cta';
import Hero from "./Hero";
import PreMadeCart from './PreMadeCarts';
import EachItem from './EachItem';
import FooterCta from './FooterCta';
import FooterMy from './FooterMy';
import Shopping from './Shopping';
import '../firebase';

import reducer, { initialState } from "./reducer";


import FireSignup from './FireSignup';
import './App.css';

function App(){
  return (
    <Router>
      <AuthProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Route path="/Signup" exact component={FireSignup} />
            <NavbarMy />
            <Route path="/shopping" exact component={Shopping} />
            <Route path="/" exact>
              <Hero />
              <PreMadeCart />
              <EachItem />
              <FooterCta />
            </Route>
            <FooterMy />
        </StateProvider>
      </AuthProvider>
    </Router>
  );
// }
}

export default App;
