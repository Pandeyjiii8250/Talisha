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
import FooterMy from './Footer/FooterMy';
import Shopping from './Shooping/Shopping';
import Checkout from './Checkout/Checkout';
import Aboutus from './Aboutus';
import Extras from "./Extras";
import Pundit from "./Future/Pundit";
import Shopkeeper from "./Future/Shopkeeper";
import PrivacyPolicy from "./Footer/PrivacyPolicy";
import ReturnPolicy from "./Footer/ReturnPolicy";
import TermsUse from "./Footer/TermsUse";


import Test from "./Test";

import reducer, { initialState } from "./reducer";

// import '../firebase';
import FireSignup from './FireSignup';
import './App.css';
import ShippingPolicy from "./Footer/ShippingPolicy";
import Comming from "./Footer/Comming";
import Cart from "./Cart";
import OrderInfo from './OrderInfo'


function App(){
  
  return (
    <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <AuthProvider>
          <DataProvider>
              <NavbarMy />
              <Route path="/Signup" exact component={FireSignup} />
              <Route path="/shopping" exact component={Shopping} />
              <Route path="/test" exact component={Test} />
              <Route path='/checkout' exact component={Checkout} />
              <Route path="/aboutUs" exact component={Aboutus} />
              <Route path="/privacy" exact component={PrivacyPolicy} />
              <Route path="/return" exact component={ReturnPolicy} />
              <Route path="/termsofuse" exact component={TermsUse}/>
              <Route path="/shipping" exact component={ShippingPolicy} />
              <Route path="/cmsoon" exact component={Comming} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/order" exact component={OrderInfo} />
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
        </AuthProvider>
      </StateProvider>
    </Router>
  );
// }
}

export default App;
