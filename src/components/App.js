import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { contact }]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log(contact);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={() => (
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route 
            path="/add" 
            element={() => (
              <AddContact 
                addContactHandler={addContactHandler}
              />
            )}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
