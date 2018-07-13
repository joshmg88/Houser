import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Wizard1 from '../Wizard1/Wizard1'
import Wizard2 from '../Wizard2/Wizard2'
import Wizard3 from '../Wizard3/Wizard3'
// import axios from 'axios'

class Wizard extends Component {
    // handleAdd = () => {
    //     const { name, address, city, state, zipcode } = this.state
    //     axios.post('/api/houses', { name, address, city, state, zipcode })
    // }
    render() {
        // console.log(this.state);
        return (

            <div>
                <h3>Wizard</h3>
                <Link to='/'><button>Cancel</button></Link>
                <Route path='/wizard/wizard1' component={Wizard1} />
                <Route path='/wizard/wizard2' component={Wizard2} />
                <Route path='/wizard/wizard3' component={Wizard3} />
                <Link to='/wizard/wizard1'>Step1</Link>
                <Link to='/wizard/wizard2'>Step2</Link>
                <Link to='/wizard/wizard3'>Step3</Link>


            </div>
        );
    }
}

export default Wizard; 