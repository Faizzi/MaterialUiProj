import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import React from "react";
import styled from "styled-components";

const Demo = () => {
  return (
    <Wrapper>
      <Container>
        <Box id="mainBox">
          <Typography variant="h4">Subscribe & Request a demo</Typography>
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
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 4rem 0rem;
  background-color: #f7f7f7;

  #mainBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .emailBox {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 300px !important;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh;
    margin-top: 1.5rem;
  }
  .emailField {
    padding: 2px 24rem 2px 0.75rem !important;
    padding: 11px 20px;
  }
  .subBtn {
    padding: 6px 23px;
    font-size: 13px !important;
    background-color:#3f51b5;
    color: #fff;
    font-weight: 500;
    border-radius: 18px;
    :hover{
        
        background-color:#3f51b5;
    }
  }
`;
export default Demo;
