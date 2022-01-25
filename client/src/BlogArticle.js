import React from "react";



class BlogArticle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            body: this.props.body,
            author: this.props.author,
            date: this.props.date,
            src: this.props.src,
            meta: this.props.meta

        }
    }

   render(){
       return (
           <div className="container-fluid">
                <div className="row">
                    <h1> {this.state.title}</h1>
                </div>
                <div className="row">
                    <img src={this.state.src} alt={this.state.meta}/>

                </div>
                <div className="row">
                    <span> {this.state.date}</span>
                    <span> {this.state.author}</span>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  {this.state.body.paragraphs.map(para => (
                        <p>{para}</p>

                    
                    ))}
                  </div>

                </div>

           </div>
       )
   }





}

export default BlogArticle;