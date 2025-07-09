import React from "react";
import Header from "./components/header";
import Item from "./components/to-do-item";
import Button from "./components/button";
import "./style.css";
const App = () =>{
  return(
    <div className="container">
      <Header/>
      <Item/> 
      <Item/> 
      <Item/> 
      <Item/> 
      <Item/> 
      <Button/>
    </div>
  );
};

export default App ; 