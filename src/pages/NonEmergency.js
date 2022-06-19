import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class NonEmergency extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'nonemergency')
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
            <div className='nonemergency'>
                <h1>Non-Emergencies</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name of Reporter</th>
                            <th>Time of Report</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.name}</td>
                            <td>{dep.timeOfReport}</td>
                            <td>{dep.description}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}