import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogArticle from './BlogArticle';
import carddata from './cardsdata';


class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: carddata

        }
        this.tuja = this.tuja.bind(this)

    }

    tuja(smtxt){
        var moto = encodeURIComponent(smtxt)

        var uri  = `/Blog/${moto}`
        return uri


    }

    render(){
        return(
                <Router>
                <Routes>
                    {this.state.posts.map(post => (
                         
                        
                            <Route exact path={this.tuja(post.title)} element={<BlogArticle key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} src={post.src}/>} />
                        

                        
                    ))}
                </Routes>
                </Router>



        )
    }
}