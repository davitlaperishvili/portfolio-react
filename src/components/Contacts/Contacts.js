import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./contacts.scss";
export default function Contacts() {
  return (
    <div className="content contact">
      <h2 className="right_section_title">Contacts</h2>
      <div className="contact_info">
        <div className="info_listing">
          <div className="info_item">
            <span>Phone number: </span>
            <a href="tel:+995599124399">(+995) 599 12 43 99</a>
          </div>
          <div className="info_item">
            <span>Email: </span>
            <a href="mailto:davitlaperishvili@gmail.com">
              davitlaperishvili@gmail.com
            </a>
          </div>
        </div>
        <div className="socials">
          <ul>
            <li>
              <a
                target="__blank"
                href="https://www.facebook.com/dato.laperishvili/"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/davit-laperishvili-964511175/"
              >
                <em className="fab fa-linkedin"></em>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            {/* <li>
              <a
                target="__blank"
                href="https://www.instagram.com/davitlaperishvili/"
              >
                <em className="fab fa-instagram-square"></em>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
