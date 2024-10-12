import React from "react";
import Swal from "sweetalert2";
import "../../assets/css/components/ResidencesSection.css";

const residences = [
  {
    title: "Rose Court Phase One, Aco Lugbe. Airport Road, Abuja ",
    rooms: "",
    size: "",
    price: "",
    image: "./assets/images/pages/home/estate1.jpg", // Replace with actual image URL
  },
];

function sendEmail(fullName, phoneNumber, email, productLocation) {
  var subject = `Property Request from ${fullName}`;
  var message = `I am interested in learning more about the properties available in ${productLocation}. Could you please provide me with more details.`;

  var body = `Dear Bardi Real Estate Agent,\n\n`;
  body += `Client's Name: ${fullName}\n`;
  body += `Client's Phone number: ${phoneNumber}\n`;
  body += `Client's Email: ${email}\n\n`;
  body += `Request Message:\n${message.replace(/\n/g, "%0A")}`;

  var mailToLink = `mailto:bardirealestateltd@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailToLink;
}

function sendRequest(productLocation) {
  Swal.fire({
    title: `Make request for ${productLocation}`,
    html: `
         <input type="text" id="swal-input1" class="swal2-input" style='width: 80%;' placeholder="Enter your name">
         <input type="email" id="swal-input2" class="swal2-input" style='width: 80%;' placeholder="Enter your email">
         <input type="text" id="swal-input3" class="swal2-input" style='width: 80%;' placeholder="Enter your phone number">
      `,
    showCancelButton: true,
    confirmButtonText: "Make Request",
    cancelButtonText: "Cancel",
    reverseButtons: true,
    preConfirm: () => {
      const name = document.getElementById("swal-input1").value;
      const email = document.getElementById("swal-input2").value;
      const phone = document.getElementById("swal-input3").value;

      if (!name || !email || !phone) {
        Swal.showValidationMessage("Please fill out all fields");
      }

      return { name, email, phone };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { name, email, phone } = result.value;

      sendEmail(name, phone, email, productLocation);
    }
  });
}

const ResidencesSection = () => {
  return (
    <section id="residences" className="popular-residences">
      <h2 className="residences-title">Our Popular Residences</h2>
      <div className="residences-grid">
        {residences.map((residence, index) => (
          <div key={index} className="residence-card">
            <img
              src={residence.image}
              alt={residence.title}
              className="residence-image"
            />
            <div className="residence-details">
              <h3 className="residence-title">{residence.title}</h3>
              <div className="residence-info">
                <span>{residence.rooms}</span>
                <span>{residence.size}</span>
              </div>
              <button
                className="signup-btn"
                onClick={() => {
                  sendRequest(residence.title);
                }}
              >
                Make Request
              </button>
              <p className="residence-price">{residence.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResidencesSection;
