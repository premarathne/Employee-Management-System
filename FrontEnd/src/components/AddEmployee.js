import React, { Component } from 'react';
import '../css/addEmployee.css';
import axios from 'axios';
class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.changeFirstName=this.changeFirstName.bind(this);
        this.changeLastName=this.changeLastName.bind(this);
        this.cancel=this.cancel.bind(this);
        this.state={
           
                firstName:'',
                lastName:'',
                emailId:''

            }
        }
    
changeFirstName=(e)=>{
    this.setState({firstName:e.target.value})
}
    
changeLastName=(e)=>{
    this.setState({lastName:e.target.value})
}
changeEmailId=(e)=>{
    this.setState({emailId:e.target.value})
    
}
cancel(){
    this.props.history.push('/')
}

employeeSubmit=(e)=>{
    e.preventDefault();
    let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId}
    console.log('employee =>'+JSON.stringify(employee));
    axios.post('http://localhost:8080/employee/create',this.state).then(res=>{
    console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}
    render() {
        return (
            <div>
                
                <h2 text align="center" style={{marginTop:"15px"}}>Add Employee</h2>
                <div className="card mt-5">
                <div className="card-body">
                 <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input type="text" className="form-control" value={this.state.firstName} onChange={this.changeFirstName}
          id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input type="text" className="form-control" value={this.state.lastName}  onChange={this.changeLastName} id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email Id</label>
          <input type="text" className="form-control" value={this.state.emailId} onChange={this.changeEmailId}
          id="exampleInputPassword1" placeholder="Password" />
        </div>
        
        <button type="submit" onClick={this.employeeSubmit} className="btn btn-primary">Save</button>
        <button type="submit" onClick={this.cancel} className="btn btn-primary" style={{marginLeft:"10px"}}>Close</button>
        </form></div>
            </div></div>
        );
    }
}

export default AddEmployee;