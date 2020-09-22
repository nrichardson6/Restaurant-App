import React, { useState } from "react";
import { Form,Button,Icon } from "semantic-ui-react";

const MenuForm = ({addMenu}) => {

  const [name, setName] = useState("");
  const [time,setTime]= useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    addMenu(name,time); 
    setName("");
    setTime("");
  };
  
  
  
    return(
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Add a Menu"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}/>
      <Form.Input
          label="Time"
          placeholder="Breakfast,Lunch,Etc"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
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