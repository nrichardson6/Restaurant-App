import React, {useState,useEffect} from 'react';
import './App.css';
import { Container } from "semantic-ui-react";
import axios from "axios";
import MenuList from "./MenuList";
// import MenuForm from "./MenuForm";

function App() {
const [menus,setMenus] = useState([
  {id:1, name:"American", time:"Lunch"},
  {id:2, name:"Thai", time:"Dinner"},
  {id:3, name:"Classic", time:"Breakfast"},
]);

  useEffect (() => {
    axios
    .get("/api/menus")

    .then((res) => {
      setMenus(res.data);
    })
    .catch((err) => {
       console.log("error occurred fetching menus");
    });    
  }, []);

  const addMenu = (name,time) => {
    axios
      .post("/api/menus", { name: name, time: time })
      .then((res) => {
        setMenus([...menus, res.data]);
      })
      .catch((err) => {
        alert("error occurred creating menu");
      });
  };

  const updateMenu = (id) => {
    axios
      .put(`/api/menus/${id}`)
      .then((res) => {
        const updatedMenus = menus.map((menu) => {
          if (menu.id === res.data.id) {
            return res.data;
          }
          return menu;
        });
        setMenus(updatedMenus);
      })
      .catch((err) => {
        alert("update didn't work");
      });
  };

  const deleteMenu = (id) => {
    axios
      .delete(`/api/menus/${id}`)
      .then((res) => {
        setMenus(menus.filter((menu) => menu.id !== res.data.menu.id));
      })
      .catch((err) => {
        alert("delete didn't work");
      });
    console.log(id);
  };

  return (
    <Container className="App">
      <h1> Dev Garden</h1>
      <h3>When youre here youre family</h3>

      <MenuList updateMenu={updateMenu} deleteMenu={deleteMenu} menus={menus} />

  
    </Container>
  );
}

export default App;
