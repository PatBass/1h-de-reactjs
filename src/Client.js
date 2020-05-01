import React from "react";

function Client (props) {
    return (


        <li>
            {props.details.firstname} {props.details.lastname}&nbsp;
            <button onClick={()=>props.onDelete(props.details.id)}>
                x
            </button>
        </li>


    );
}

export default Client;