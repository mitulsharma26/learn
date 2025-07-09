import React from "react";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Mycomp(){
     const name = "Mitul Sharma";
     return <h2>my name is {name} </h2>;
    }
root.render(
   < Mycomp/>
);
