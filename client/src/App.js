import React  from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Mainfaqss from "./Mainfaqss";
import Postslist from "./Postslist";
import Blog from "./Blog";

import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';





class App extends React.Component {
  
  render(){
   
    return ( 
    
      
       
        
         <Router>
        
           <Routes>

            <Route path="/" element={<Blog/>} />

       
      <Route path="/postlist" element={<Postslist/>} />
       <Route exact path="/faqs"  element={<Mainfaqss/>} /> 
        <Route exact path="/"   element={<Home /> } />
        <Route exact path="/signup"  element={< Signup />} />
        
        <Route exact path="/signin"  element={<Signin />} />
       </Routes>
        </Router>
      
    
    )
  }
}

export default App;
