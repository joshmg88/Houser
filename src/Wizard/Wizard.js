import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {

    render() {
        // console.log(this.state);
        return (
            <div>
                <h3>Wizard</h3>

                <Link to='/'><button onClick={() => this.handleAdd()}>Complete</button></Link>
            </div>
        );
    }
}

export default Wizard; 