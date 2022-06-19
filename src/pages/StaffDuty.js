import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class StaffDuty extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'staffduty')
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
            <div className='staffduty'>
                <h1>Staff Duties</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Officer</th>
                            <th>Title of Duty</th>
                            <th>Description of Duty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.officer}</td>
                            <td>{dep.title}</td>
                            <td>{dep.description}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}