import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";

export const Footer = () => {
  const showPhoneNumber = () => {
    Swal.fire({
      title: "My Number  📞",
      text: "+94 70 4673 604",
      icon: "info",
      background: "#1e1e2f",
      color: "#ffffff",
      confirmButtonText: "Close",
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} D.P Yapa Portfolio. All rights reserved.
        </p>
        <div className="footer-icons">
          <a
            href="https://github.com/Punsara-Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/punsara-yapa-820a32319/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/u/2/?ogbl#inbox?compose=CllgCJZdBHfvSphRHmQPqxXBPdfKBXbRrSKNqWgFjsrQFJhPzzpDFPwHcZHqrXMtGRttfZChJdV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
          >
            <FaEnvelope size={30} style={{ cursor: "pointer" }} />
          </a>

          <div
            onClick={showPhoneNumber}
            style={{
              cursor: "pointer",
              fontSize: "28px",
              color: "#ccc",
            }}
          >
            <FaPhone />
          </div>
        </div>
      </div>
    </footer>
  );
};
