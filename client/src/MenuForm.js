import React, { useState } from "react";
import { Form,Button,Icon } from "semantic-ui-react";

const MenuForm = ({ addMenu}) => {

  const [info, setInfo] = useState({
    name:"",
    time:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMenu(info); 
    setInfo("");
  };
  
  
  
    return(
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Add a Menu"
          required
          value={useState}
          onChange={(e) => setInfo(e.target.value)}/>
      <Form.Input
          label="Time"
          placeholder="Breakfast,Lunch,Etc"
          required
          value={useState.time}
          onChange={(e) => setInfo(e.target.value)}
          />

      <Button   
            icon
            color="green">
              ADD <Icon name="list" />
      </Button>   
      </Form>
    );
  
  
};

export default MenuForm;