import React from "react";
import './Featured.css';

class Featured extends React.Component{
    constructor(props){
        super(props)

    }
render(){
    return(
        <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
                <img className="postcard__img" src={'https://source.unsplash.com/1000x1000/?bitcoin,ethereum,cryptocurrency'} alt="Image Title" /></a>
            <div className="postcard__text">
                <span className="postcard__title blue"><a href="#">Welcome to illeagle</a></span>
                <div className="postcard__subtitle small">
                    <span >
                    <i className="fa fa-user" aria-hidden="true">  </i> <span>
                          Brian CEO, illeagle
                    </span>
                    </span>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                We are a specialized hosting provider, located in Sweden, a free-speech haven.
We serve a growing community of international clients with special needs.
We are a specialized hosting provider, located in Sweden, a free-speech haven.
We serve a growing community of international clients with special needs.
                </div>
                
            </div>
        </article>
    )
}




}

export default Featured;