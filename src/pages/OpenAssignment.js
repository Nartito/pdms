import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class OpenAssignment extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'openassignment')
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
            <div className='openassignment'>
                <h1>Open Assignments</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title of Assignment</th>
                            <th>Description</th>
                            <th>Time of Making</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.title}</td>
                            <td>{dep.description}</td>
                            <td>{dep.timeOfMaking}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}