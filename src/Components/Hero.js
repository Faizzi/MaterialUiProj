import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import styled from "styled-components";
import hero from "../data/images/hero.svg";
import DoneIcon from "@mui/icons-material/Done";
import { Typography,List, ListItem, ListItemText, TextField, Button } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const Hero = () => {
  return (
    <Wrapper>
      <Container className="container" sx={{ paddingTop: "7rem",paddingBottom:"7rem" }}>
        <Box className="mainBox">
          <Box className="heroLeftBox">
            <Typography className="h3">Better Management; Less Expense</Typography>
            <Typography variant="h6">Not sure about Pro? Try trial first!</Typography>
            <Box className="listBox" sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
              <List className="List">
              <ListItem>
                <DoneIcon sx={{ color: "#ff9100" }} />
                <ListItemText className="liItem">Unlimited Projects</ListItemText>{" "}
              </ListItem>
              <ListItem>
                <DoneIcon sx={{ color: "#ff9100" }} />
                <ListItemText className="liItem">Unlimited Team Members</ListItemText>
              </ListItem>
              <ListItem>
                {" "}
                <DoneIcon sx={{ color: "#ff9100" }} />
                <ListItemText className="liItem">Unlimited Disk Space</ListItemText>
              </ListItem>
              </List>
            </Box>
            <Box className="emailBox" sx={{ marginTop: "3rem" }}>
              <TextField
                sx={{
                  "& fieldset": { border: "none" },
                }}
                className="emailField"
                placeholder="Your Email:"
              ></TextField>
              <Button variant="contained" className="subBtn">
                <FlightTakeoffIcon />
                Subscribe
              </Button>
            </Box>
          </Box>
          <Box className="heroRightBox">
            <img className="heroImg" src={hero} alt="heroSection" />
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
   
  .mainBox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  .h3 {
    font-size: 48px;
    text-shadow: 0 4px 4px rgb(0 0 0 / 22%);
    color: #3f51b5 !important;
    font-weight: 550;
    margin-bottom: 1.5rem !important;
  }

  .liItem {
    color: rgba(0, 0, 0, 0.54);
  }
  .emailBox {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 300px !important;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh;
  }
  .emailField {
    padding: 2px 3px 2px 0.75rem !important;
    padding: 11px 20px;
  }
  .subBtn {
    padding: 6px 10px;
    font-size: 13px !important;
    background-color: #ff9100;
    color: #000;
    font-weight: 500;
    border-radius: 18px;
    :hover {
      background-color: #ff6d00 !important;
    }
  }
  .heroRightBox img {
    width: 100%;
  }
  @media (max-width:998px){
    .container{
      padding-top: 4rem;
      padding-bottom: 3rem;
    }
    .mainBox {
    grid-template-columns:1fr;
    align-items: center;
    text-align: center;
  }
  
  .List{
    margin:0 auto
  }
  .emailBox{
    width: 50%;
    margin: 0 auto;
  }
 
  .heroRightBox img{
    width: 50%;
   margin-top: 2rem;
  }
  }
`;

export default Hero;
