import React, { useState } from "react";
import './ContactCard.css'

const ContactCard = (props) => {
  const { avatar, name, email, age, message } = props;

  const [showAge, setShowAge] = useState(true);

  const handleButtonClick = () => {
    setShowAge(!showAge);
  };

  return (
    <div className="contact-card">
      <img src={avatar} alt="profile" />
      <div className="user-details">
        <p>{name}</p>
        <p>Email: {email}</p>
        <button onClick={handleButtonClick}>Toggle Age</button>
        {showAge ? <p>Age: {age}</p> : null}
        <p>Message: {message}</p>
      </div>
    </div>
  );
};

export default ContactCard;