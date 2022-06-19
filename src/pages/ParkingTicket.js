import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class ParkingTicket extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'parkingticket')
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
            <div className='parkingticket'>
                <h1>Parking Tickets</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Issuing Officer</th>
                            <th>Plate Number</th>
                            <th>Time Issued</th>
                            <th>Paying Fee</th>
                            <th>Location of Incident</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.officer}</td>
                            <td>{dep.plate}</td>
                            <td>{dep.dateIssued}</td>
                            <td>{dep.price} EUR</td>
                            <td>{dep.location}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}