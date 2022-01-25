import React from 'react';
import Posts from './Posts';
import carddata from './cardsdata';
import Header from './Header';
import Footer from './Footer';
import './Posts.css'


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
            <Header/>

        <div className='row'>
            {this.state.posts.map(post => (
                
                    <Posts key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} src={post.src}/>


                
            ))}
        </div>
        <Footer/>

    </div>
       )
    }



}

export default Postslist;