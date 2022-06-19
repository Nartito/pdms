import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class CarAccident extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'caraccident')
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
            <div className='caraccident'>
                <h1>Car Accidents</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Time of Incident</th>
                            <th>Location</th>
                            <th>Plate Number</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.when}</td>
                            <td>{dep.location}</td>
                            <td>{dep.plateNumber}</td>
                            <td>{dep.description}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}