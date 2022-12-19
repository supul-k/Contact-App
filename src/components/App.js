import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {    
    setContacts(oldContacts =>[...oldContacts,contact]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  };
  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList  contacts={contacts}/>
    </div>
  );
}

export default App;
