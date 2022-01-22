import React, { Fragment } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Mainfaqss from "./Mainfaqss";

import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';





class App extends React.Component {
  constructor(props){
    super(props)

    

  }
  render(){
   
    return ( 
    
      
       
        
         <Router>
           
           <Routes>
       
        
       <Route exact path="/faqs"  element={<Mainfaqss/>} /> 
        <Route exact path="/"   element={<Home /> } />
        <Route exact path="/signup"  element={<Signup />} />
        <Route exact path="/signin"  element={<Signin />} />
       </Routes>
        </Router>
      
    
    )
  }
}

export default App;
