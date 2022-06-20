import React from "react";
import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleInputChange = (e) => {
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === "email") {
  //     setEmail(inputValue);
  //   } else if (inputType === "userName") {
  //     setUserName(inputValue);
  //   } else {
  //     setPassword(inputValue);
  //   }
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   if (!validateEmail(email) || !userName) {
  //     setErrorMessage("Email or username is invalid");
  //     return;
  //   }
  //   if (!checkPassword(password)) {
  //     setErrorMessage(
  //       `Choose a more secure password for the account: ${userName}`
  //     );
  //     return;
  //   }
  //   alert(`Hello ${userName}`);

  //   setUserName("");
  //   setPassword("");
  //   setEmail("");
  // };

  return (
    <div className="contact-page">
      {/* <section>
        <h2>Lets Make Something Beautiful!</h2>
      </section> */}

      <div className="contact-style">
        <div className="contact-header-container">
          <h2 className="beautiful-text">lets make something beautiful!</h2>
        </div>
        <p>
          Email:
          <a href="mailto:developwithamber@gmail.com">
            developwithamber@gmail.com
          </a>
        </p>
        <p>
          Github:<a href="https://github.com/AmberZimmerman"> AmberZimmerman</a>
        </p>
        <p>
          LinkedIn:
          <a href="https://www.linkedin.com/in/amberz-designs/">
            developwithamber
          </a>{" "}
        </p>
      </div>
      {/* <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div> */}
    </div>
  );
}
