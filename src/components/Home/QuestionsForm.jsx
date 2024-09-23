import React, { useState } from 'react';
import "../../assets/css/components/QuestionsForm.css";

const QuestionsForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted email:', email);
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default QuestionsForm;