import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class PublicAnnouncements extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'publicannouncement')
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
            <div className='publicannouncements'>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Length</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => <tr key={dep.Id}>
                            <td>{dep.id}</td>
                            <td>{dep.title}</td>
                            <td>{dep.length}</td>
                            <td>{dep.text}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}