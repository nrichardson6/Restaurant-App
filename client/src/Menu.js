import React from 'react';
import { Card, Icon, Button } from "semantic-ui-react";

const Menu = ({ id,name,time,updateMenu, deleteMenu}) => (
    <Card>
      <h2>Type:{name}</h2>
      <br/>
      <h4>Serving at:{time}</h4>
      <Button   
            icon
            color="blue"
            onClick={() => updateMenu(id)}>
              <Icon name="pencil" />
      </Button>
      <Button   
            icon
            color="red"
            onClick={() => deleteMenu(id)}>
              <Icon name="trash" />
      </Button>

    </Card>
);

export default Menu;
