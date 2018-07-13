import React, { Component } from 'react';
import axios from 'axios'

class Wizard extends Component {

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
    handleName = (value) => { this.setState({ name: value }); }
    handleAddress = (value) => { this.setState({ address: value }); }
    handleCity = (value) => { this.setState({ city: value }); }
    handleState = (value) => { this.setState({ state: value }); }
    handleZip = (value) => { this.setState({ zipcode: value }); }

    handleAdd = () => {
        const { name, address, city, state, zipcode } = this.state
        axios.post('/api/houses', { name, address, city, state, zipcode })
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <h3>Wizard</h3>
                <Link to='/'><button>Cancel</button></Link>
                <input type="text" placeholder="name" onChange={e => this.handleName(e.target.value)} />
                <input type="text" placeholder='address' onChange={e => this.handleAddress(e.target.value)} />
                <input type="text" placeholder='city' onChange={e => this.handleCity(e.target.value)} />
                <input type="text" placeholder='state' onChange={e => this.handleState(e.target.value)} />
                <input type="integer" placeholder='zipcode' onChange={e => this.handleZip(e.target.value)} />

            </div>
        );
    }
}

export default Wizard; 