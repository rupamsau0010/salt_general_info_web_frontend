import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/logo.png";
import {
  Toolbar,
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  IconButton,
  ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  function Responsive() {
    return (
      // setOpen  = true since this will trigger the Drawer
      <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
    );
  }

  function Desktop() {
    return (
      <div className="links">
        <div className="innerLinks">
          <Link to="#about">About</Link>
          <Link to="#teams">Teams</Link>
          <Link to="#Business">Businesses</Link>
          <Link to="#Indivisual">Individuals</Link>
          <Link to="#Investors">Investors</Link>
        </div>
        <Link to="#intern">
          <Button
            color="primary"
            className="button animate__animated animate__pulse animate__infinite"
          >
            Join Our Team
          </Button>
        </Link>
      </div>
    );
  }

  function changeDevice() {
    console.log(window.innerWidth);
    if (window.innerWidth > 800) {
      return <Desktop />;
    } else return <Responsive />;
  }

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="responsiveUl"
      >
        <List>
          <ListItem button component="a" href="#about">
            About
          </ListItem>

          <ListItem button component="a" href="#teams">
            Teams
          </ListItem>
          <ListItem button component="a" href="#Business">
            Business
          </ListItem>
          <ListItem button component="a" href="#Investors">
            Investors
          </ListItem>
          <ListItem Link component="a" href="#Indivisual">
            Individual
          </ListItem>

          <ListItem button component="button" href="#intern">
            <Button
              color="primary"
              className="button animate_animated animatepulse animate_infinite"
            >
              Join Our Team
            </Button>
          </ListItem>
        </List>
      </Drawer>

      <AppBar color="transparent" className="appbar">
        <Toolbar className="toolbar">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>

          {changeDevice()}
        </Toolbar>
      </AppBar>
    </>
  );
}