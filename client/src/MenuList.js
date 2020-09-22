import React from 'react';
import Menu from './Menu';
import {Card} from "semantic-ui-react";

const MenuList = ({ menus, updateMenu, deleteMenu }) => (
  <Card.Group>
    { menus.map( menu => 
        <Menu
          key={menu.id}
          {...menu}
          updateMenu={updateMenu}
          deleteMenu={deleteMenu}
        />
      )
    }
  </Card.Group>
)

export default MenuList;