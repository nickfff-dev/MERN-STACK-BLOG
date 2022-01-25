import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './Questions.css';



class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            info: this.props.info,
            expanded: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
        this.style.transition = 'all 0.5s ease-in-out';
    
    }
  render(){
      return (
        <article className='question noma accordion-item small-item'>
            <header>
            <h3 className='question-title small-ques' onClick={this.handleClick}>{this.state.title}</h3>
            <button className='btn' onClick={this.handleClick}>
                {this.state.expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
            </header>
            {this.state.expanded ? <p className='answer' style={{color:"white"}}>{this.state.info}</p> : null}

        </article>
      )
  }
    
}

export default Questions