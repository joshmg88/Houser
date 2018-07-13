import React from 'react';

const House = (props) => {
    console.log(props.houses.id)
    const { id, property_name, adress, city, state, zip } = props.houses
    return (
        <div>
            <h3>House</h3>
            {property_name}
            {adress}
            {city}
            {state}
            {zip}
            <button onClick={() => props.delete(id)}>Delete</button>
        </div>
    );
};

export default House;