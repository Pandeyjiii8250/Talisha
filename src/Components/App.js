import React from "react";
import  {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider} from './Contex/AuthContex';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMy from "./NavbarMy";
// import Cta from './Cta';
import Hero from "./Hero";
import PreMadeCart from './PreMadeCarts';
import EachItem from './EachItem';
import FooterCta from './FooterCta';
import FooterMy from './FooterMy';


import SignUp from './SignUp'
import CreateAcc from './CreateAcc';
import PhoneSignUp from './PhoneSignUp';
import './App.css';

function App(){
  return (
    <Router>
      <AuthProvider>
          <Route path='/createnew' exact component={CreateAcc} />
          <Route path="/Signup" exact component={SignUp} />
          <Route path="/PhoneSignup" exact component={PhoneSignUp} />
          <Route path="/" exact>
            <NavbarMy />
            <Hero />
            <PreMadeCart />
            <EachItem />
            <FooterCta />
            <FooterMy />
          </Route>
      </AuthProvider>
    </Router>
  );
// }
}

export default App;
