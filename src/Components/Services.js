import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import CardComp from "../Helper/CardComp";
const Services = () => {
  return (
    <Wrapper>
      <Container>
        <Box id="mainBox">
          <Box id="serviceLeft">
            <CardComp className="try" IconComp={AccountBalanceIcon} title="INVOICING" />
            <CardComp IconComp={CreditCardIcon} title="PAYMENT GATEWAY" />
            <CardComp IconComp={ListAltIcon} title="CUSTOMER RECORDS" />
            <CardComp IconComp={CloudDoneIcon} title="CLOUD SYNC" />
          </Box>
          <Box id="serviceRight">
            <Typography variant="h5" sx={{ fontWeight: "550", marginBottom: ".5rem" }}>
              Made by business people for business people
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                sx={{
                  color: "#9d9d9d",
                  fontSize: "14px",
                }}
              >
                Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.Lorem
                ipsum dolor sit amet,
              </Typography>
              <Typography
                sx={{
                  color: "#9d9d9d",
                  fontSize: "14px",
                }}
              >
                vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum
                prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per.
              </Typography>
            </Box>
            <Button variant="contained" className="freeBtn" sx={{ backgrounColor: "#ff9100", marginTop: ".5rem" }}>
              Try it free
            </Button>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #f7f7f7;
  padding: 6rem 0rem;
  #mainBox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
  }
  #serviceLeft {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
   
  }

  .freeBtn {
    background-color: #ff9100;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 550;
    font-size: 14px;
    text-transform: capitalize;
    margin-top: 1.5rem;
    :hover {
      background-color: #ff6d00;
    }
  }
  @media (max-width:998px){
    #mainBox {
    grid-template-columns: 1fr;
  
  }
  }
  @media (max-width:648px){
    #serviceLeft {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
   
  }
  }
`;
export default Services;
