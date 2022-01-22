import React, { Fragment } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Questions from './Questions';


class Mainfaq extends React.Component {
    constructor(props){
        super(props)
        this.state={
          expanded: false,
          maintitle: this.props.maintitle,
            questions: this.props.questions

        }
        this.handleExpand=this.handleExpand.bind(this)

    }
    handleExpand = (e) => {
        
         e.preventDefault()
         this.setState({
                expanded: !this.state.expanded
         })
         
        
    
    }
    render(){
        return(
            
            
           
                <article className='question accordion-item '>
                <header>
                <h4 className='question-title'    onClick={this.handleExpand}>{this.state.maintitle}</h4>
                <button   className='btn' onClick={this.handleExpand}>
                    {this.state.expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                
            </button>
            </header>
            {  this.state.expanded ? this.state.questions.map(x =>(
                <Questions className="accordion small-ques" key={x.queId} title={x.title} info = {x.info}/>  )): null}
            
            </article>

             
           
           
    

        
        )
    }
    





}

export default Mainfaq