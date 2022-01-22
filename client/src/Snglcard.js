import React, { Fragment } from 'react'
import './card.css'



class Snglcard extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={ meta: this.props.Cmeta,
            title: this.props.title,
            timerc: this.props.time,
            src: this.props.image
            
        }

  
        




    }
    

    componentDidMount(){
        
        this.setState({timerc: this.state.timerc,
            meta: this.state.meta,
            title: this.state.title,
            imagec: this.state.imagec
        })
    }

    

   

    render(){
        return(
            <div className="col-md-4 yes">
            <div className="card text-white card-has-bg click-col" style={{backgroundImage: `url(${this.state.src})`}}>
                <img className="card-img d-none" src={this.state.imagec}
                    alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"/>
                <div className="card-img-overlay d-flex flex-column" >
                    <div className="card-body">
                        <small className="card-meta mb-2">{this.state.meta}</small>
                        <h4 className="card-title mt-0 "><a className="text-white" herf="#">
                            {this.state.title}</a></h4>
                        <small><i className="far fa-clock"></i> {this.state.timerc}</small>
                    </div>
                   
                </div>
            </div>
        </div>

        )
    }
}

export default Snglcard