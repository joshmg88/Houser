import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import House from '../House/House';
import axios from 'axios'

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            houses: []
        };
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses').then(res => {
            console.log(res.data);
            this.setState({
                houses: res.data
            });
        }).catch(err => { console.log(err) })
    }

    handleDelete = (id) => {
        console.log(id)
        axios.delete(`/api/houses/${id}`).then(() => {
            this.getHouses()
        })
    }


    render() {
        const { houses } = this.state
        let houseList = houses.map((e, i) => {
            // console.log(e)
            return <House key={i} houses={e} delete={this.handleDelete} />
        })
        return (
            <div>
                <h3>Dashboard</h3>

                {houseList}
                <Link to='/wizard'><button>Add New Property</button></Link>

            </div>
        );
    }
}

export default Dashboard;