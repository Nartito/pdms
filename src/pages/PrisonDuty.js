import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class PrisonDuty extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'prisonduty')
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
            <div className='prisonduty'>
                <h1>Prison Duties</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Officer</th>
                            <th>Prison</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Time of Duty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.officer}</td>
                            <td>{dep.prison}</td>
                            <td>{dep.title}</td>
                            <td>{dep.description}</td>
                            <td>{dep.timeOfDuty}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}