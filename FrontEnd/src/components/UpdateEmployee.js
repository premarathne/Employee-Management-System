import React, { Component } from 'react';
import axios from 'axios';

class UpdateEmployee extends Component {
    constructor(props){
        super(props);
        
        this.employeeEdiSubmit=this.employeeEdiSubmit.bind(this);
        this.cancel=this.cancel.bind(this);
        this.state={
                id:'',
                firstName:'',
                lastName:'',
                emailId:''

            }
        }
    componentDidMount(){
       
        axios.get('http://localhost:8080/employee/getbyId/'+this.props.match.params.id).then(res=>{
            console.log(res.data.Empid)  
        this.setState({id:res.data.id,firstName:res.data.firstName,lastName:res.data.lastName,emailId:res.data.emailId}); }
        )  
        
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
employeeEdiSubmit(){
    axios.put('http://localhost:8080/employee/update',this.state).then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}
cancel(){
    this.props.history.push('/')
}
    
    render() {
         return (
            <div>
                 <h2 text align="center" style={{marginTop:"15px"}}>Update Employee</h2>
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
        
        <button type="submit" onClick={this.employeeEdiSubmit} className="btn btn-primary">Update</button>
        <button type="submit" onClick={this.cancel} className="btn btn-primary" style={{marginLeft:"10px"}}>Close</button>
        </form></div>
            </div>
            </div>
        );
    }
}

export default UpdateEmployee;