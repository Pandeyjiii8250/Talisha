import React from "react";
import  {BrowserRouter as Router, Route} from 'react-router-dom';

//These are three contex providers used in hear
import {AuthProvider} from './Contex/AuthContex';
import {StateProvider} from './StateProvider';
import {DataProvider} from './Contex/DataProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';

//THese are import to components
import NavbarMy from "./NavbarMy";
import Hero from "./Cta/Hero/Hero";
import PreMadeCart from './PreMade/PreMadeCarts';
import EachItem from './EachItem/EachItem';
import FooterCta from './Cta/FooterCta/FooterCta';
import FooterMy from './FooterMy';
import Shopping from './Shooping/Shopping';
import Checkout from './Checkout/Checkout';
import Aboutus from './Aboutus';
import Extras from "./Extras";
import Pundit from "./Future/Pundit";
import Shopkeeper from "./Future/Shopkeeper";
import Test from "./Test";

import reducer, { initialState } from "./reducer";

// import '../firebase';
import FireSignup from './FireSignup';
import './App.css';

function App(){
  return (
    <Router>
      <AuthProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          <DataProvider>
              <NavbarMy />
              <Route path="/Signup" exact component={FireSignup} />
              <Route path="/shopping" exact component={Shopping} />
              <Route path="/test" exact component={Test} />
              <Route path='/checkout' exact component={Checkout} />
              <Route path="/aboutUs" exact component={Aboutus} />
              <Route path="/" exact>
                <Hero />
                <Pundit />
                <PreMadeCart />
                {/* <Test /> */}
                <Extras />
                <EachItem />
                <Shopkeeper />
                <FooterCta />
              </Route>
              <FooterMy />
          </DataProvider>
        </StateProvider>
      </AuthProvider>
    </Router>
  );
// }
}

export default App;
