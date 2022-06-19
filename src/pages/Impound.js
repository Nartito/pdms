import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Impound extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'impound')
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
            <div className='impound'>
                <h1>Impounded Vehicles</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Plate Number</th>
                            <th>Owner of Vehicle</th>
                            <th>Date of Impound</th>
                            <th>Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.plate}</td>
                            <td>{dep.owner}</td>
                            <td>{dep.dateOfImpound}</td>
                            <td>{dep.price} EUR</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}