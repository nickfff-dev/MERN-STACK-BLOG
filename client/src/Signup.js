import React from "react";
import './auth.css';
import axios from 'axios';
import Signin from "./Signin";
import Home from "./Home";




class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      newUser: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.password2Change = this.password2Change.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
 
 changenewUser(){
   this.setState({
      newUser: true
   })
 }

  handleSubmit(event) {
    const _this = this
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    if (data.password !== data.password2) {
      alert("password not match");
      this.resetForm()
    } else {
    axios.post('/api/signup', data)
      .then((res) => {
        if (res.data === "Signup successfull") {
          alert("Signup successfull")
         

          this.resetForm()
          
          
        } else if(res.data === "User already exists") {
          _this.changenewUser()
          alert("User already exists please login")
          
        } else {
          alert("Signup failed please try again")
          this.resetForm()
        }
      }).catch((err) => {
        console.log(err)
      })
    this.resetForm()}
  }

  usernameChange(event) {
      this.setState({
            name: event.target.value
      }
        )

  }

    emailChange(event) {
        this.setState({
            email: event.target.value
        }
            )
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        })
    }
   
    password2Change(event) {
    this.setState({password2: event.target.value})
}
resetForm(){
  this.setState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
}
    render(){
        return(
            <div>
            {this.state.newUser ? <Signin/> : <div className=" mt-5 container card">
              <form  id="signup-form" onSubmit={this.handleSubmit} method="POST">
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>user name</label>
                <input type="text" className="form-control" placeholder="First name" value={this.state.name}  onChange={this.usernameChange}/>
            </div>

         

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={this.state.email}  onChange={this.emailChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.passwordChange} />
            </div>
            <div className="form-group">
                <label>confirm password</label>
                <input type="password" className="form-control" placeholder="confirm password" value={this.state.password2} onChange={this.password2Change} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>

            </div>}
            </div>
        )
    }
}

export default Signup