import React, { Component } from 'react'
import abcd from '../data/tabaleData'
import axios from 'axios'

export default class Contact extends Component{
   
    state= {
        employees: []        
    }
    
    /* 
    [ Data Fetching with axios() ] */
    componentDidMount(){
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then( (response) => 
        this.setState({
            employees: response.data.data
        })
    )}
    /* Data Fetching with fetch()
    componentDidMount(){
        fetch("http://dummy.restapiexample.com/api/v1/employees")        
        .then( res => res.json() )
        .then( json => {
            this.setState({
                employees: json.data
            })
        })
    } 
    */

    render(){           
        return(
            <>
                <main>
                    <article>
                        <header className="section background-primary text-center">
                            <h1 className="text-white margin-bottom-0 text-size-50 text-thin text-line-height-1">Contact</h1>
                        </header>
                        <div className="section background-white">
                            <div class="line">
                                <div class="margin text-center">  

                                <h2>Showing the Data with AXIOS</h2>
                                {this.state.employees.map (
                                    (item) => 
                                    <div key={item.id}>{item.id}</div>
                                )}

                                <h2>Showing the Data with API</h2>                 
                                <table width="900px" border="1" cellPadding="5" cellSpacing="5">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Employee Name</th>
                                        <th>Employee Salary</th>
                                        <th>Employee Age</th>                                        
                                    </tr>  
                                    </thead>  
                                    <tbody>
                                        {
                                         this.state.employees.map( emp =>  (
                                            <tr key={emp.id}>
                                                <td> { emp.id } </td>
                                                <td> { emp.employee_name } </td>
                                                <td> { emp.employee_salary } </td>
                                                <td> { emp.employee_age } </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>

                                <hr />
                                <h2>Showing the Data with External JSON Data</h2>
                                <table width="900px" border="1" cellPadding="5" cellSpacing="5">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Gender</th>
                                    </tr>  
                                    </thead>  
                                    <tbody>
                                    {
                                        abcd.map( item => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.location}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.gender}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </>
        )
    }
}

