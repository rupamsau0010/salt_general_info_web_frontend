import React, { Component } from "react";
import axios from "axios";
import {url} from "./url"

export default class Modal extends Component {
  // state.
  state = {
    name: "",
    email: "",
    contactNo: "",
    type: this.props.text
  }

  handelChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  submit = (event) => {
    // event.preventDefault();

    const payload = {
      name: this.state.name,
      email: this.state.email,
      contactNo: this.state.contactNo,
      type: this.state.type
    }

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
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <button
          type="button"
          class="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Join Us
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  JOIN US
                  {/* <h1>{this.props.text}</h1> */}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/*  modal body */}
              <div className="modal-body">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      required
                      placeholder="Name"
                      autoFocus
                      name="name"
                      value={this.state.name}
                      onChange={this.handelChange}
                    ></input>
                  </div>

                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Email"
                      required
                      name="email"
                      value={this.state.email}
                      onChange={this.handelChange}
                    ></input>
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Contact Number"
                      required
                      name="contactNo"
                      value={this.state.contactNo}
                      onChange={this.handelChange}
                    ></input>
                  </div>

                  {/* <button type="submit" class="btn btn-primary">
                  Submit
                </button> */}
                </form>
              </div>

              {/* modal footer */}
              <div class="modal-footer">
                <button type="button" class="button" onClick={this.submit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
