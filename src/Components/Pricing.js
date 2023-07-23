import { Card, FormControlLabel, Switch, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import PriceCard from "../Helper/PriceCard";

const Pricing = () => {
  const [price, setPrice] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Box>
          <Box id="topContent">
            <Typography variant="h4">Choose a Plan</Typography>
            <Box>
              <FormControlLabel
                sx={{
                  display: "block",
                }}
                control={<Switch checked={price} onChange={() => setPrice(!price)} color="primary" />}
                label="Get up to 10% discount annually"
              />{" "}
            </Box>
          </Box>
          <Box id="bottomContent">
            <PriceCard
              cardStyle="cardHeader"
              category="Developer"
              level="For New Developer"
              pay="Free"
              bandwidth="10GB of Bandwidth"
              connection="Max 50 connection"
              ram="512MB RAM"
              access="Unlimited access"
              users="Unlimited User"
              analytic="Data analytics"
            />
            <PriceCard
              cardStyle="cardUnique"
              category="Starter"
              level="For Professional Developer"
              pay={price ? "$ 324 /Yr" : "$ 30 /Mo"}
              bandwidth="10GB of Bandwidth"
              connection="Max 50 connection"
              ram="512MB RAM"
              access="Unlimited access"
              users="Unlimited User"
              analytic="Data analytics"
            />
            <PriceCard
              cardStyle="cardHeader"
              category="Business"
              level="For Small Businesses"
              pay={price ? "$ 648 /Yr" : "$ 60 /Mo"}
              bandwidth="10GB of Bandwidth"
              connection="Max 50 connection"
              ram="512MB RAM"
              access="Unlimited access"
              users="Unlimited User"
              analytic="Data analytics"
            />
            <PriceCard
              cardStyle="cardHeader"
              category="Enterprise"
              level="For Large companies"
              pay={price ? "$ 1728 /Yr" : "$ 160 /Mo"}
              bandwidth="10GB of Bandwidth"
              connection="Max 50 connection"
              ram="512MB RAM"
              access="Unlimited access"
              users="Unlimited User"
              analytic="Data analytics"
            />
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 3rem 0rem;
  #bottomContent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  .cardUnique {
    background-color: #3f51b5;
    padding: 1rem 0rem;
    color: #fff;
  }
`;
export default Pricing;
