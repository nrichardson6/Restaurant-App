import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from "semantic-ui-react";

function App() {
const [menus,setMenus] = useState([
  {id:1, name:"American", time:"Lunch"},
  {id:2, name:"Thai", time:"Dinner"},
  {id:3, name:"Classic", time:"Breakfast"},
]);

  useEffect (() => {
    
  } )




  return (
    <Container className="App">
      <h1>Hello </h1>
    </Container>
  );
}

export default App;
