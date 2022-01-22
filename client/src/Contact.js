import React, { Fragment } from "react";
import axios from 'axios'
import Socials from "./Socials";


class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
        this.resetForm = this.resetForm.bind(this)

    }
    onNameChange(event){
        
        this.setState({name: event.target.value})
    }
    onEmailChange(event){
        
        this.setState({email: event.target.value})

    }
    onMessageChange(event){
        
        this.setState({message: event.target.value})
    }
    resetForm(){
        return this.setState({
            name: '',
            email: '',
            message: ''
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

          axios.post('/api/sendMessage', data)
          .then((res)=>{
            
            if (res.data === "Send email successfully") {
              alert("Message Sent.");
              
  
              
            } else  {
              alert("Message failed to send.")
            }
          })
          .catch(function (error) {
              console.log(error);
          })
          this.resetForm()
           
        }

    render(){
        return(
            <div className='row p-4 contactus'>
                <div className="col-sm-6 text-center contacttxt"> 

                <p>
                   For any queries, you can contact us anytime from the form to your left<br/> or through our social media accounts.
                </p>
                <Socials/>
                
                
                </div>
                <div className="col-sm-6"> 
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.onNameChange}/>
    </div>
    <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input name="email" className="form-control" type="text" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange}/>
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea  name="message" className="form-control" rows="5" value={this.state.message} type="text" onChange={this.onMessageChange}/>
    </div>
    <button type="submit" className="btn contact-btn btn-primary">Submit</button>   

</form></div>

            </div>
         
               

            
        )
    }


}

export default Contact;