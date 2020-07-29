import React, { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const data = await response.json();

    setContacts(data.results);
  };

  useEffect(() => {
    fetchUsers();
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
        />
      ))}
    </>
  );
};

export default App;
