import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import logo from "../data/images/logo.png";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";
import DrawerComp from "./DrawerComp";
const Nav = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = ["Home", "Service", "Features", "Pricing", "Contact"];
  return (
    <Wrapper>
      <AppBar id="appBar" position="fixed" sx={{ background: "#fff", padding: "0rem 4rem", minWidth: "100vw" }}>
        <Toolbar>
          <img src={logo} alt="logo" />
          {isMatch ? (
            <>
              <Typography>Testing..</Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs sx={{ marginLeft: "2rem" }}>
                {PAGES.map((page, index) => (
                  <Tab key={index} sx={{ color: "#000", fontWeight: "550" }} label={page} />
                ))}
              </Tabs>
              <Button
                className="signUpBtn"
                sx={{ marginLeft: "auto" }}
                variant="contained"
                startIcon={<FlightTakeoffIcon />}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  overflow-x: hidden;
  #appBar {
    box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);
  }
  img {
    width: 40px;
  }
  .signUpBtn {
    background-color: #ff9100;
    color: #000;
    :hover {
      background-color: #ff6d00 !important;
    }
  }
`;
export default Nav;
