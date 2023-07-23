import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import BusinessCard from "../Helper/BusinessCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SecuritySharpIcon from '@mui/icons-material/SecuritySharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import FastfoodSharpIcon from '@mui/icons-material/FastfoodSharp';
const Business = () => {
    return (
        <Wrapper>
            <Container>
                <Box id="mainBox">
                    <Typography variant="h6" sx={{ fontWeight: "550" }}>
                        Grow Your Business
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>Access integrations and new features in a matter of seconds</Typography>
                    <Box className="cardsBox">
                        <BusinessCard IconComp={AccountBalanceIcon} text="SELL EVERYWHERE" /> 
                        <BusinessCard IconComp={SecuritySharpIcon} text="SECURED PAYMENTS" /> 
                        <BusinessCard IconComp={LanguageSharpIcon} text="SMART PRICING" /> 
                        <BusinessCard IconComp={FastfoodSharpIcon} text="GO BEYOND" />

                    </Box>
                </Box>
            </Container>
        </Wrapper>
    );
};
const Wrapper = styled.section`
  padding: 3rem 0rem;
  .cardsBox {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
   
  }
`;

export default Business;
