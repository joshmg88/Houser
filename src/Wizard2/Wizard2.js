import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import axios from 'axios'

class Wizard2 extends Component {

    constructor() {
        super()

        this.state = {
            // name: '',
            // address: '',
            // city: '',
            // state: '',
            // zipcode: 0,
            imageUrl: ""
        };
    }
    handleName = (value) => { this.setState({ imageUrl: value }); }
    // handleAddress = (value) => { this.setState({ address: value }); }
    // handleCity = (value) => { this.setState({ city: value }); }
    // handleState = (value) => { this.setState({ state: value }); }
    // handleZip = (value) => { this.setState({ zipcode: value }); }

    // handleAdd = () => {
    //     const { name, address, city, state, zipcode } = this.state
    //     axios.post('/api/houses', { name, address, city, state, zipcode })
    // }

    render() {
        // console.log(this.state);
        return (
            <div>
                <h3>Wizard</h3>
                <input type="text" placeholder="name" onChange={e => this.handleImage(e.target.value)} />
            </div>
        );
    }
}

export default Wizard2;
    // <Link to='/'><button onClick={() => this.handleAdd()}>Complete</button></Link>
    // <input type="text" placeholder='address' onChange={e => this.handleAddress(e.target.value)} />
    // <input type="text" placeholder='city' onChange={e => this.handleCity(e.target.value)} />
    // <input type="text" placeholder='state' onChange={e => this.handleState(e.target.value)} />
    // <input type="integer" placeholder='zipcode' onChange={e => this.handleZip(e.target.value)} />