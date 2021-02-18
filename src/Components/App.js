import React from "react";
import  {BrowserRouter as Router, Route} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMy from "./NavbarMy";
// import Cta from './Cta';
import Hero from "./Hero";
import PreMadeCart from './PreMadeCarts';
import EachItem from './EachItem';
import FooterCta from './FooterCta';
import FooterMy from './FooterMy';

// import SignUp from './SignUp'
// import CreateAcc from './CreateAcc';
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI").then(res=> res.text())
        .then(res=>this.setState({apiResponse: res}))
  }

  componentWillMount(){
    this.callAPI();
  }
  render(){
  return (
    <Router>
    <>
      <NavbarMy />

    {/* <Route path='/createnew' exact component={CreateAcc} /> */}
    {/* <Route path="/Signup" exact component={SignUp} /> */}
    <Route path="/" exact>
    <Hero />
    <PreMadeCart />
    <EachItem />
    <FooterCta />
    </Route>
    <FooterMy />
    </>
    </Router>
  );}
}

export default App;
