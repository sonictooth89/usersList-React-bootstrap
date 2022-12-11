import React from 'react';
import './UsersList.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';



export const UsersListOneItem = props => {
    
    return(
        <ListGroup.Item variant='success' key={props.user.username}> 
        <Figure>
            <Figure.Image 
                className='foto'
                width={50}
                roundedCircle={true} 
                src={'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/'+props.user.picture} 
                alt={props.user.username}
            />
        </Figure>
        <strong>    {props.user.first_name} {props.user.last_name}</strong> {props.user.username}
    </ListGroup.Item>
    )
    
}