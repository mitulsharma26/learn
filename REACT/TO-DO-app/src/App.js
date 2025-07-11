import React from "react";
import Header from "./components/header";
import Item from "./components/to-do-item";
import Button from "./components/button";
import "./style.css";
const App = () =>{
  return(
    <div className="container">
      <Header title ="TO-DO" />
      <Item text="eat"/> 
      <Item text="code"/> 
      <Item text="play"/> 
      <Item text="socialise"/> 
      <Item text="sleep"/> 
      <Button/>
    </div>
  );
};

export default App ; 