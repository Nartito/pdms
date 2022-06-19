import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class ConvictedFelon extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'convictedfelon')
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
            <div className='convictedfelon'>
                <h1>Convicted Felons</h1>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Crime</th>
                            <th>Time</th>
                            <th>Time Of Conviction</th>
                            <th>Prison</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.name}</td>
                            <td>{dep.crime}</td>
                            <td>{dep.time}</td>
                            <td>{dep.timeOfConviction}</td>
                            <td>{dep.prison}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}