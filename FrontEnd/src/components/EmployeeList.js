import React, { Component } from 'react';
import axios from 'axios';
import UpdateEmployee from './UpdateEmployee';

class EmployeeList extends Component {
    
   
    constructor(props)
    {
        super(props);
        this.state={ employees:[] }
        this.addEmployee=this.addEmployee.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
    }


    addEmployee(){
        this.props.history.push('/add/Employee');
    }
    updateEmployee(id){
        this.props.history.push('/update/Employee/'+id)
      
    }
    deleteEmployee(id){
        axios.delete('http://localhost:8080/employee/delete/'+id).then(res=>{
            this.setState({employees:this.state.employees.filter(employee=>employee.id !== id)})
        })
    }
    componentDidMount(){
        axios.get('http://localhost:8080/employee/findall').then(res=>
            {
                this.setState({employees:res.data});
            }
        );
        }
    render() {
        return (
            <div>
                <h1 text align="center">Employee List</h1>
                <div className="mb-5 mt-5 container">
                   <button className="btn btn-primary" onClick={this.addEmployee}>AddEmployee</button>
                </div>
                <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                  <th>Employee First Name</th>  
                  <th>Employee Last Name</th>
                   <th> Email Id</th>
                   <th> Actions</th>
                   </thead>
                   <tbody>
                     {this.state.employees.map(employee=>
                            <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td><button className="btn btn-primary" onClick={ ()=>this.updateEmployee(employee.id)}>Update</button>
                            <button style={{marginLeft:"10px"}} className="btn btn-danger" onClick={ ()=>this.deleteEmployee(employee.id)}>Delete</button>
                            </td>
                            </tr>  
                       )}
                   </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default EmployeeList;