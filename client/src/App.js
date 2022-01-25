import React  from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Mainfaqss from "./Mainfaqss";
import Postslist from "./Postslist";
import Blog from "./Blog";
import BlogArticle from "./BlogArticle";
import cardsdata from "./cardsdata";

import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';





class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: cardsdata

  }
    this.tuja = this.tuja.bind(this)

  }

  tuja(smtxt){
      var moto = encodeURIComponent(smtxt)


      var uri  = `/${moto}`
      console.log(uri)
      return uri


  }
  
  render(){
   
    return ( 
    
      
       
        
         <Router>
        
           <Routes>
           {this.state.posts.map(post => (
                         
                        
                         <Route key={post.id} exact path={this.tuja(post.title)} element={<BlogArticle key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} src={post.src}/>} />
                     

                     
                 ))}
            

       
      <Route exact path="/postlist" element={<Postslist/>} />
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
