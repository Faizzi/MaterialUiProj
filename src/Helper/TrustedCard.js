import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const TrustedCard = (props) => {
  const { cardTitle, cardDesc, trustiPic, trustiName, trustiQual } = props;
  return (
    <Wrapper>
      <Card id="card" sx={{ minWidth: 275, paddingTop: "10px" }}>
        <CardContent className="cardBody">
          <Box>
            <Typography sx={{ fontWeight: 550 }} variant="h6" gutterBottom>
              {cardTitle}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: "14px" }}>
              {cardDesc}
            </Typography>
          </Box>
          <Box className="cardBottomData">
            <img src={trustiPic} alt={"trusted people pictures"} />
            <Box>
              <Typography sx={{ fontWeight: 550, fontSize: "16px" }}>{trustiName}</Typography>
              <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                {trustiQual}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  #card {
    position: relative;
    transition: all 0.3s ease;
    border-radius: 12px;
  }
  #card:hover {
    box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%);
  }
  .cardBottomData {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 1rem;
    img {
      border-radius: 50%;
      width: 55px;
    }
  }
`;
export default TrustedCard;
