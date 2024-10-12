import React, { useState } from "react";
import "../../assets/css/components/QuestionsForm.css";

const QuestionsForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log("Submitted data:", fullName, email, phoneNumber, message);

    var subject = `Website Contact from ${fullName}`;

    var body = `Client's Name: ${fullName}\n`;
    body += `Client's Phone number: ${phoneNumber}\n`;
    body += `Client's Email: ${email}\n\n`;
    body += `Client's Message:\n${message.replace(/\n/g, "%0A")}`;

    var mailToLink = `mailto:bardirealestateltd@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailToLink;

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <section id="contact" className="questionsform-section">
      <h1>Do You Have Any Questions?</h1>
      <h2>Get Help From Us</h2>
      <div className="chat-option">
        <span className="icon">📞</span>
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
