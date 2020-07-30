import React, { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [apiMessage, setApiMessage] = useState('');

  const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const data = await response.json();

    setContacts(data.results);
  };

  const fetchApiData  = async () => {
    const response = await fetch("http://localhost:5000/api/v1");
    const data = await response.json();

    setApiMessage(data.message);
  }

  useEffect(() => {
    fetchUsers();
    fetchApiData();
  }, []);

  return (
    <>
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          avatar={contact.picture.large}
          name={`${contact.name.first} ${contact.name.last}`}
          email={contact.email}
          age={contact.dob.age}
          message={apiMessage}
        />
      ))}
    </>
  );
};

export default App;
