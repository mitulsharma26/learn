import React from "react";

const Item = () =>{
    return(
        <li className="todoitems">
           <span> 
        <input type="checkbox" />
            <span className="todotext">Eat</span>
            </span>
            <p>...</p>
        </li>
    );
};

export default Item ; 