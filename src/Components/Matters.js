import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import matterSvg from "../data/images/1.svg";

const Matters = () => {
  return (
    <Wrapper>
      <Container>
        <Box id="mainBox">
          <Box id="leftMatter">
            <Typography variant="h4">Every business matters. We give you tools to succeed.</Typography>
            <Box className="matterText">
              <Typography sx={{ fontSize:"14px"}}>
                Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
              </Typography>
              <Typography sx={{ fontSize:"14px"}}>
                Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis
                mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea.
              </Typography>
            </Box>
            <Button variant="contained" className="matterBtn">
              Try it free
            </Button>
          </Box>
          <Box id="rightMatter">
            <img src={matterSvg} alt={"matterSvg"} />
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0rem;
  background-color: #f7f7f7;
  #mainBox{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 4rem;
  }
  #leftMatter{
    margin-right: 8rem;
  }
  .matterBtn{
      background-color: #ff9100;
      color: #000;
      text-transform: capitalize;
      font-weight: bold;
      transition:all 0.3s ease;
      :hover{
          background-color:  #ff6d00;
      }
  }
  #rightMatter{
      justify-content: center;
      align-items: center;
      
  }
  .matterText{
      display: flex;
      flex-direction: column;
      gap:1rem;
      margin: 1rem 0rem;
     
  }
  #rightMatter img{
width: 60%;
  }

`;
export default Matters;
