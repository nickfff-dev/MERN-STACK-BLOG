import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Posts from './Posts';
import carddata from './cardsdata';


class Postslist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: carddata
        }
    }
    render(){
       return(
        <div className='container-fluid'>
        <div className='row'>
            {this.state.posts.map(post => (
                
                    <Posts key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} src={post.src}/>


                
            ))}
        </div>
    </div>
       )
    }



}

export default Postslist;