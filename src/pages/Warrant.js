import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Warrant extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'warrant')
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
            <div className='warrant'>
                <h1>Active Warrants</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name of Felon</th>
                            <th>Issuing Judge</th>
                            <th>Time Issued`</th>
                            <th>Reason for Warrant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.name}</td>
                            <td>{dep.judge}</td>
                            <td>{dep.timeOfIssue}</td>
                            <td>{dep.reason}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}