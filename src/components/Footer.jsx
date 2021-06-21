import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import axios from "axios";
import {url} from "./url";

export default class Footer extends Component {
  // state.
  state = {
    email: "",
    message: "",
    type: "general",
  };

  handelChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    // event.preventDefault();

    const payload = {
      email: this.state.email,
      message: this.state.message,
      type: this.state.type,
    };

    axios({ url: `${url}/join/joinusmessages`, method: "POST", data: payload })
      .then((response) => {
        // const date = response.data;
        console.log(response.data.status);
        console.log("Data has been sent");
        if (response.data.status === "success") {
          alert("Thanks For Connecting. We Will Get Back to You Soon.");
        } else if (response.data.status === "failure") {
          alert(response.data.payload);
        }
      })
      .catch((err) => {
        console.log("Enternal Server error");
      });
  };

  render() {
    console.log(this.state);
    return (
      <div class="footer">
        <div class="footer-content">
          <div class="footer-section about">
            <h1 class="logo-text">
              <span>Salt</span> Ecosystem
            </h1>
            <p>
              At Salt Ecosystem, a platform is created for local businesses to
              cater to the microscopic needs of the people, hence empowering
              them to bypass all the monopoly of mammoth players out there.
            </p>
            <div class="contact">
              <span>
                <i class="fas fa-phone"></i> &nbsp; +91-7980859619
              </span>
              <span>
                <i class="fas fa-envelope"></i> &nbsp;
                contact.saltecosystem@gmail.com
              </span>
            </div>
            <div class="socials">
              <a href="https://www.facebook.com/saltecosystem" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/saltecosystem/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/salt-ecosystem"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/EcosystemSalt" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div class="footer-section links">
            <h2>Quick Links</h2>
            <br />
            <ul>
              <Link to="#about">
                <li>About</li>
              </Link>
              <Link to="#teams">
                <li>Teams</li>
              </Link>
              <Link to="#Business">
                <li>Business</li>
              </Link>
              <Link to="#Indivisual">
                <li>Individuals</li>
              </Link>
              <Link to="#Investors">
                <li>Investors</li>
              </Link>
            </ul>
          </div>

          <div class="footer-section contact-form">
            <h2>Contact us</h2>
            <br />
            <form>
              <input
                type="email"
                name="email"
                class="text-input contact-input"
                placeholder="Your email address..."
                value={this.props.email}
                onChange={this.handelChange}
              ></input>
              <textarea
                rows="2"
                name="message"
                class="text-input contact-input"
                placeholder="Your message..."
                value={this.props.message}
                onChange={this.handelChange}
              ></textarea>
              <button type="button" className="button" onClick={this.submit}>
                Send
              </button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; CopyRights {new Date().getFullYear()} | Salt Ecosystem
        </div>
      </div>
    );
  }
}
