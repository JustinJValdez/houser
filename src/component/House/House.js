import React from 'react';



function House(props) {
    return (
        <div>
            <h1>{props.newHouse.houseName}</h1>
            <p>{props.newHouse.address}</p>
            <p>{props.newHouse.city}</p>
            <p>{props.newHouse.state}</p>
            <p>{props.newHouse.zip}</p>
           <button>
                Delete
           </button>
        </div>
    )
}
export default House;