import React from 'react'
import { connect } from 'react-redux'
import { deleteEmp } from '../redux/Action'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={
            employee: []
        }
    }

    delete = (id) =>{
        this.props.deleteEmp(id)
        
    }

    render(){
        return (
            <div>
                {this.props.isloggedIn ? (
                <div className="container-fluid">
                    <h1 className="text-center"> Employee Data Table</h1>
                    <br></br>
                        <table class="table table-fixed">
                            <thead class="thead-dark"  >
                                <tr>
                                    <th>Index</th>
                                    <th>Employee Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Date of Joining</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.duplicate.map((ele,index) =>{
                                    return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{ele.eid}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.email}</td>
                                            <td>{ele.department}</td>
                                            <td>{ele.doj}</td>
                                            <button className="btn btn-danger" onClick={() =>  this.delete(ele.eid)}>✘</button>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                </div>
                ):(
                    <Redirect to='/login'></Redirect>
                )}
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    isloggedIn : state.isloggedIn,
    employee : state.employee,
    duplicate : state.duplicate
});

const mapDispatchToProps = dispatch => ({
    deleteEmp: payload => dispatch(deleteEmp(payload)),
});
  
export default connect(mapStateToProps,mapDispatchToProps)(Home)