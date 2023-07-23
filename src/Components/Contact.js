import { IconButton, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';
const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
            Send Us an Email
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, error.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <TextField
            InputLabelProps={{
              style: { color: "gray", fontSize: "16px" },
            }}
            sx={{ width: "100%", "& fieldset": { border: "none" }, borderBottom: "1px solid gray" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            InputLabelProps={{
              style: { color: "gray", fontSize: "16px" },
            }}
            sx={{ width: "100%", "& fieldset": { border: "none" }, borderBottom: "1px solid gray" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            InputLabelProps={{
              style: { color: "gray", fontSize: "16px" },
            }}
            sx={{ width: "100%", "& fieldset": { border: "none" }, borderBottom: "1px solid gray" }}
            id="outlined-basic"
            label="Subject"
            variant="outlined"
          />
          <TextField
            InputLabelProps={{
              style: { color: "gray", fontSize: "16px" },
            }}
            sx={{ width: "100%", "& fieldset": { border: "none" }, borderBottom: "1px solid gray" }}
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />
          <Box>
            <IconButton  
            disableRipple className="sendBtn"  aria-label="send">
              <SendIcon className="iconSend" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #f7f7f7;
  padding: 4rem 0rem;
  .sendBtn{
        padding: 10px;
        background-color: #3f51b5;
  }
  .iconSend{
      font-size: 2rem;
      color: #fff;
  }
`;
export default Contact;
