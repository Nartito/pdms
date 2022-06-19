import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Investigation extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'investigation')
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
            <div className='investigation'>
                <h1>Ongoing Investigations</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name of Suspect</th>
                            <th>Time of Crime</th>
                            <th>Type of Crime</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.person}</td>
                            <td>{dep.time}</td>
                            <td>{dep.title}</td>
                            <td>{dep.description}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}