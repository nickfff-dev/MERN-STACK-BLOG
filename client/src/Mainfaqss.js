import React from 'react';
import data from './data'
import Mainfaq from './Mainfaq'
import Header from './Header';

class Mainfaqss extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: data

        }
    }
render(){
    return(
        <div className='container-fluid'>
           
            <Header/>
            
            <div className='container'>  
            <div className='row' >  
           
           
             <div className='col-sm-12'>
                <h2 className='p-4'>Frequently asked questions</h2>
            </div>

            </div>
           
                {this.state.data.map(item => (
                    <Mainfaq  key={item.id} maintitle={item.maintitle} questions={item.questions}/>
                ))}
          
            </div>
            

            

        </div>
    )
}



}

export default Mainfaqss;