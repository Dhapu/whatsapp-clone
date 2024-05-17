import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ContactList from './components/ContactList';
import Conversation from './components/Conversation';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: #f0f2f5;
  
`;


function App() {
  const [selectedChat, setSelectedChat] = useState();
  const [refreshContactList, setRefreshContactList] = useState(false);
  return (
    
    <Container> 
      <ContactList />
      <Conversation />
     
      </Container>
  );
}

export default App;
