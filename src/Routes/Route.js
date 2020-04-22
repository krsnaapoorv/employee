import React,{useEffect} from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import Home from '../components/Home'
import Add from '../components/AddEmployee'
import Login from '../auth/Login'
import { connect } from "react-redux"
import {signout,checkStorage} from '../redux/Action'

function Routes(props){

    useEffect(() => { 
        let val = localStorage.getItem('isLoggedIn')
        if(val === true){
            props.checkStorage(true)
        }
        else{
            props.checkStorage(false)
        }
        
    });

    const handleclick = ()=>{
        localStorage.removeItem("isLoggedIn")
        localStorage.setItem("isLoggedIn",false)
        props.signout(false)
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                <h3 className="navbar-brand" >Employee Data</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item active ml-lg-3">
                            <Link to="/add">Add Employee</Link>
                        </li>
                    </ul>
                    {props.isloggedIn ? (
                            <div className="ml-lg-auto ml-md-auto">
                                <button className = "btn btn-info m-2" onClick={handleclick}>Sign off</button>
                            </div> 
                            ):(
                                <div className="ml-lg-auto ml-md-auto">
                                    <Link to="/login" className = "btn btn-info">Sign In</Link>
                                </div>
                            )}
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/login" exact component  = {Login} />
                <Route path="/add" exact component  = {Add} />
            </Switch>
        </div>
    )
}

const mapStateToProps = state => ({
    isloggedIn : state.isloggedIn
});
  
const mapDispatchToProps = dispatch => ({
    signout: payload => dispatch(signout(payload)),
    checkStorage: payload => dispatch(checkStorage(payload))
});

export default connect(mapStateToProps,mapDispatchToProps) (Routes)