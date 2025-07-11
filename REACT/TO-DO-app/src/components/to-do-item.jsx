import React from "react";

const Item = (props) =>{
    return(
        <li className="todoitems">
           <span> 
       { props.completed ? <></> : <input type="checkbox" />}
            <span className="todotext">{props.text}</span>
            </span>
            <p>...</p>
        </li>
    );
};

export default Item ; 