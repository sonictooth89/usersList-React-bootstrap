import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './App.css';
import {people} from './data/people'
import { UsersList } from './components/UsersList/UsersList';


function App() {                
  return (
    <div>
    <Navbar expand="lg" variant="dark" bg="success">
      <Container>
        <Navbar.Brand href="#">Users List</Navbar.Brand>
      </Container>
    </Navbar>
      <UsersList users={people} />
    </div>
  );
}

export default App;
