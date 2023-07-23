import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <Wrapper>
      <Container className="container">
        <Box id="mainBox">
          <Box id="box1" sx={{ color: "#fff" }}>
            <Typography className="boxTitle" variant="h6" sx={{ fontWeight: "550" }}>
              About Us
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?
              dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut
              aliquam.
            </Typography>
            <Box>
              <Button variant="contained" className="contactBtn">
                Contact Us
              </Button>
            </Box>
          </Box>
          <Box id="box2" sx={{ color: "#fff" }}>
            <Typography className="boxTitle" variant="h6" sx={{ fontWeight: "550" }}>
              Contact
            </Typography>
            <Box className="contactSet">
              <EmailIcon sx={{ color: "#ff9100" }} />
              <Box>
                <Typography className="email" sx={{fontWeight:"550"}}>Email</Typography>
                <Typography sx={{fontSize:"16px"}}>email@abc.com</Typography>
              </Box>
            </Box>
            <Box className="contactSet">
              <LocationOnIcon sx={{ color: "#ff9100" }} />
              <Box>
                <Typography className="address" sx={{fontWeight:"550"}}>Adress</Typography>
                <Typography sx={{fontSize:"16px"}}>Topoban, Akhalia Sylhet 3114, BD</Typography>
              </Box>
            </Box>
          </Box>
          <Box id="box3" sx={{ color: "#fff" }}>
            <Typography className="boxTitle" variant="h6" sx={{ fontWeight: "550" }}>
              Disclaimer
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?
            </Typography>
            <Box className="socials">
              <LinkedInIcon className="socialIcon" />
              <TwitterIcon className="socialIcon" />
              <FacebookIcon className="socialIcon" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #212121;
  .container{
    /* padding: 38px 4rem; */
  }
  .boxTitle{
      position: relative;
  }
  .boxTitle::after{
      content:'';
      position: absolute;
      background-color: #ff9100;
      height: 2px;
      width:70px;
      left: 0;
      top: 2rem;
      transition: 0.3s;
  }
  
  #mainBox {
    display: grid;
    grid-template-columns: 55% 25% 20%;
    /* gap: 2rem; */
  }
  #box1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 6rem;
    padding: 30px 20px 20px 20px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)

  }
  .contactSet {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
  }
  #box2{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 30px 20px 20px 20px;
      box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
      border-radius: 8px;
  }
  #box3 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 30px 20px 20px 20px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  }
  .socials {
    display: flex;
    gap: 0.5rem;
  }
  .socialIcon {
    color: #ababab;
    cursor: pointer;
  }
  .contactBtn {
    color: #000;
    background-color: #ff9100;
    transition: all 0.4s ease;
    text-transform: capitalize;
    :hover {
      background-color: #ff6d00;
    }
  }
`;
export default Footer;
