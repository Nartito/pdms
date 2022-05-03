import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Staff extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'staff')
        .then(response => response.json())
        .then(data => {this.setState({deps:data})})
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
            <div className='staff'>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Rank</th>
                            <th>Birthday</th>
                            <th>DateOfJoining</th>
                            <th>OPTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.Id}</td>
                            <td>{dep.Name}</td>
                            <td>{dep.Surname}</td>
                            <td>{dep.Rank}</td>
                            <td>{dep.Birthday}</td>
                            <td>{dep.DateOfJoining}</td>
                            <td>EDIT / DELETE</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}