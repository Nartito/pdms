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
            <div className='staff'>
                <h1>Active Personnel</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Rank</th>
                            <th>Birthdate</th>
                            <th>Date Of Joining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.name}</td>
                            <td>{dep.surname}</td>
                            <td>{dep.rank}</td>
                            <td>{dep.birthday}</td>
                            <td>{dep.dateOfJoining}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}