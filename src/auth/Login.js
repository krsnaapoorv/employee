import React from 'react'
import { Redirect } from 'react-router-dom'
import {login} from '../redux/Action'
import { connect } from "react-redux"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : ""
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit= (e) =>{
        e.preventDefault()
        let username = this.state.username
        let password = this.state.password
        if(username === "" || password === ""){
            alert("Fill the form properly")
        }
        else{
            let obj = {
                username : this.state.username,
                password : this.state.password
            }
            this.props.login(obj)
        }
        this.setState({
            username : "",
            password : ""
        })
    }


    render(){
        return (
            <div>
                {this.props.isloggedIn ? (<Redirect to = '/'></Redirect>):(
                    <form className="bgLogin mt-5" onSubmit={this.submit}>
                        <h3 className="text-center mt-1">SignIn Form</h3>
                        <div className="mx-3">
                            <label className="ml-1 mt-2">Email</label>
                            <input className="form-control" onChange={this.handleChange} type="text" value={this.state.username} name="username" placeholder="Enter username" />
                        </div>
                        <div className="mx-3">
                            <label className="ml-1 mt-2">Password</label>
                            <input className="form-control" onChange={this.handleChange} type="password" value={this.state.password} name="password" placeholder="Enter password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 ml-3 mb-3">Sign In</button>
                    </form>
                )}
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    isloggedIn : state.isloggedIn
});

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(login(payload)),
});
  
export default connect(mapStateToProps,mapDispatchToProps) (Login)

