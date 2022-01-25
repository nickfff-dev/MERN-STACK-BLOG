import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import carddata from './cardsdata';




class Posts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key: this.props.id,
            title: this.props.title,
            body: this.props.body,
            author: this.props.author,
            date: this.props.date,
            src: this.props.src,
               
        }
        this.kuja=this.kuja.bind(this)
    }

    kuja(smtxt){
        var moto = encodeURIComponent(smtxt)

        var uri  = `/${moto}`
       
      
        return uri


    }
    render(){
        return(
            <div className="container mt-5">
  <div className="row">
    <div className="col-12">
      <article className="blog-card">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
            <div className="card__background--main" style={{backgroundImage: `url(${this.state.src})`}}>
              <div className="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div className="blog-card__head">
          <span className="date__box">
          
            <span className="date__month">{this.state.date}</span>
          </span>
        </div>
        <div className="blog-card__info">
          <h5>{this.state.title}</h5>
          <p>
            <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i> {this.state.author}</a>
          </p>
          <p>{this.state.body.paragraphs[0]}</p>
         <Link  to={this.kuja(this.state.title)} > <div  className="rmore btn--with-icon"><i className="btn-icon fa fa-long-arrow-right"></i>READ MORE</div></Link>
        </div>
      </article>
    </div>
  </div>
</div>
        )
    }
}

export default Posts;