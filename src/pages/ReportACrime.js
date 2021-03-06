import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class ReportACrime extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'reportacrime')
        .then(response => response.json())
        .then(data => {this.setState({deps:data})})
        console.log(this.state);
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }


    render(){
        const {deps} = this.state;
        return(
            <div className='reportacrime'>
                <h1>Report A Crime</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Type of Crime</th>
                            <th>Time of Report</th>
                            <th>Location</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.name}</td>
                            <td>{dep.crime}</td>
                            <td>{dep.timeOfReport}</td>
                            <td>{dep.location}</td>
                            <td>{dep.description}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}