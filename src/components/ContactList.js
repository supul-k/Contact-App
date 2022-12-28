import { Link } from "react-router-dom";
import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const contacts = [
    {
      id: "1",
      name: "Supul",
      email: "sup@gmail.com",
    },
  ];

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contacts={contacts}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main" style={{marginTop: '50px'}}>
      <h2 style={{display: 'flex'}}>
        Contact List
        <Link to = "/add">
          <button className="ui button blue right" style={{marginLeft: '500px'}}>Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
