import React from 'react'
//You can make separate styling for each component and import it here


export default function Product (props) {
    return (
        <div>
            <div>
                <img src={props.image} alt={props.name} width="400"/>
                <div>{props.name}</div>
                <div>{props.price}</div>
                <div><button onClick={() => props.setSelected(props.data)}>Edit</button><button onClick={() => props.delete(props.id)}>Delete</button></div>
            </div>
        </div>
    )
}
//
//This function is stateless because no constructor was used.