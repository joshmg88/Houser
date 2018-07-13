import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard3 extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
        };
    }
    handleName = (value) => { this.setState({ mortgage: value }); }
    handleAddress = (value) => { this.setState({ desiredRent: value }); }

    handleAdd = () => {
        const { name, address, city, state, zipcode } = this.state
        axios.post('/api/houses', { name, address, city, state, zipcode })
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <h3>Wizard</h3>
                <input type="text" placeholder="name" onChange={e => this.handleMortgage(e.target.value)} />
                <input type="text" placeholder='address' onChange={e => this.handleDesiredRent(e.target.value)} />
                <Link to='/'><button onClick={() => this.handleAdd()}>Complete</button></Link>
            </div>
        );
    }
}

export default Wizard3; 