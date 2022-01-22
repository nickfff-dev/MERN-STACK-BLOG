import React, { Fragment } from 'react'
import Snglcard from './Snglcard'
import cardsdata from './cardsdata' 
import './card.css'




class Cardds extends React.Component{
constructor(props){
super(props)

this.state={
cardsdata: cardsdata,
timerc: Date().toLocaleString()
}




}
render()
{
return(

<div className='container why p-4'>
<div className='row'>
{this.state.cardsdata.map(item=>(
    <Snglcard
    key={item.id}
    Cmeta={item.meta}
    title={item.title}
    time={this.state.timerc}
    image={item.src}
    />
))}

    


</div>

</div>



)}
}


export default Cardds
