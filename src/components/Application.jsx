import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import {url} from "./url";

export default class Application extends Component {
  // state
  state = {
    allData: {},
  };

  componentDidMount = () => {
    this.getAllData();
  };

  getAllData = () => {
    axios({ url: `${url}/jobs/getalljobsdetails`, method: "GET" })
      .then((response) => {
        const data = response.data;
        console.log("reflect change");
        console.log(data);
        console.log(response);
        this.setState({ allData: data });
        console.log("Data has been received");
      })
      .catch((err) => {
        console.log("Error Retriving data");
      });
  };

  displayData = (allData) => {
    if (allData != null) {
      {console.log(allData);}
      return (
        <>
          <div className="Application">
            <h1>Applicants</h1>
            <div className="posts">
              {/* 1 */}
              {/* {console.log(allData[0].jobDuties[0])} */}
              {allData.reverse().map((data) => (
                <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{data.jobTitle}</h5>
                  <p class="card-text text-gray-100">
                    Clink the link and see the details to know more and apply.
                  </p>
                  <Link to={`/submit/${data.jobId}`} target="_blank">
                    <Button className="button">Apply</Button>
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div>
          <Footer />
        </>
      );
    } else {
      {
        console.log("None");
      }
      return (
        <>
          <div className="Application">
            <h1>Applicants</h1>
            <div className="posts">
              {/* 1 */}
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nodejs Developer</h5>
                  <p class="card-text text-gray-100">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="/submit" target="_blank">
                    <Button className="button">Apply</Button>
                  </Link>
                </div>
              </div>

              {/* 2 */}
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nodejs Developer</h5>
                  <p class="card-text text-gray-100">
                    With supporting text below as a natural lead-in to additiona
                    content.
                  </p>
                  <Link to="/submit" target="_blank">
                    <Button className="button">Apply</Button>
                  </Link>
                </div>
              </div>

              {/* 3 */}
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nodejs Developer</h5>
                  <p class="card-text text-gray-100">
                    With supporting text below as a natural lead-in to additiona
                    content.
                  </p>
                  <Link to="/submit" target="_blank">
                    <Button className="button">Apply</Button>
                  </Link>
                </div>
              </div>

              {/* 4 */}
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nodejs Developer</h5>
                  <p class="card-text text-gray-100">
                    With supporting text below as a natural lead-in to additiona
                    content.
                  </p>
                  <Link to="/submit" target="_blank">
                    <Button className="button">Apply</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  };

  render() {
    return <div>{this.displayData(this.state.allData.payload)}</div>;
  }
}