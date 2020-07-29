import React, { useState } from "react";
import '../style.css'

const ContactCard = (props) => {
  const { avatar, name, email, age } = props;

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
      </div>
    </div>
  );
};

export default ContactCard;