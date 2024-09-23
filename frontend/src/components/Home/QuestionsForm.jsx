import React, { useState } from "react";
import "../../assets/css/components/QuestionsForm.css";

const QuestionsForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", fullName, email, phoneNumber, message);
  };

  return (
    <section className="questionsform-section">
      <h1>Do You Have Any Questions?</h1>
      <h2>Get Help From Us</h2>
      <div className="chat-option">
        <span className="icon">○</span>
        Chat live with our support team
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name..."
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address..."
          required
        />
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number..."
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
          required
          cols="10"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default QuestionsForm;
