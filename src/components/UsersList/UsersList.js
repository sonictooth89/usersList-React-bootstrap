import React from 'react';
import { UsersListOneItem } from './UsersListOneItem';

import ListGroup from 'react-bootstrap/ListGroup';

export const UsersList = (props) => {
      
    return ( 
        <ListGroup variant='flush'>
            {
                [...props.users]
                .sort((a, b) => a.username.localeCompare(b.username))
                .map(userObject => <UsersListOneItem user={userObject} key={userObject.username}/>)

            }
        </ListGroup>
     );
}
