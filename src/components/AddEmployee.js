import React, { Component } from 'react'
import {addEmp} from '../redux/Action'
import { connect }from 'react-redux'
import { Redirect } from 'react-router-dom'

class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            eid : "",
            department: "",
            email: "",
            doj: ""
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    clear = () =>{
        this.setState({
            name : "",
            eid : "",
            department: "",
            email: "",
            doj: ""
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        let obj = {
            name : this.state.name,
            eid : this.state.eid,
            department : this.state.department,
            email : this.state.email,
            doj : this.state.doj,
        }
        if(obj.name === "" || obj.eid === "" || obj.department === "" || obj.email === "" || obj.doj === ""){
            alert("Fill all the entries")
        }
        else{
            this.props.addEmp(obj)
        }
        this.setState({
            name : "",
            eid : "",
            department: "",
            email: "",
            doj: ""
        })
    }


    render() {
        return (
            <div>
                {this.props.isloggedIn ? (
                <div className="bgLogin mt-5">
                    <h3 className="text-center mt-1">Add Employee Data</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Name</label>
                        <input className="form-control" onChange={this.handleChange} type="text" value={this.state.name} name="name" placeholder="Enter Name" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Employee Id</label>
                        <input className="form-control" onChange={this.handleChange} type="text" value={this.state.eid} name="eid" placeholder="Enter Employee Id" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Department</label>
                        <select className="custom-select" id="inputGroupSelect01" name="department" value={this.state.department} onChange={this.handleChange} >
                            <option defaultValue>Choose..</option>
                            <option value="account">Account</option>
                            <option value="sales">Sales</option>
                            <option value="it">IT</option>
                            <option value="technical">Technical</option>
                            <option value="labour">Labour</option>
                        </select>
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Email</label>
                        <input className="form-control" onChange={this.handleChange} type="email" value={this.state.email} name="email" placeholder="Enter email" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Date of Joining</label>
                        <input className="form-control" onChange={this.handleChange} type="date" value={this.state.doj} name="doj" placeholder="Select DOJ" />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Add Employee</button>
                        <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.clear}>Clear Form</button>
                    </div>
                </div>
                ):(
                    <Redirect to='/login'></Redirect>
                )}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isloggedIn : state.isloggedIn
});

const mapDispatchToProps = dispatch => ({
    addEmp: payload => dispatch(addEmp(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Add)
