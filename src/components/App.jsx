import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Mission from "./Mission";
import About from "./About";
import TeamCarousel from "./TeamCarousle";
import Business from "./Business";
import Investors from "./Investors";
import Indivisual from "./Indivisual";
import Intern from "./Intern";
import Footer from "./Footer";
import Application from "./Application";
import ApplicationSubmit from "./ApplicationSubmit";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./style.css";

// basename={process.env.PUBLIC_URL}
export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Carousel />
            <Mission />
            <About />
            <TeamCarousel />
            <Business />
            <Investors />
            <Indivisual />
            <Intern />
            <Footer />
          </Route>

          <Route path="/application" component={Application}></Route>
          <Route path="/submit/:jobId" component={ApplicationSubmit}></Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}
