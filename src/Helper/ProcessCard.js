import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
const ProcessCard = (props) => {
  const { IconComp, title, desc } = props;
  return (
    <Wrapper>
      <Card id="card" sx={{ minWidth: 275, paddingTop: "10px" }}>
        <CardContent className="cardBody">
          <Box>
            <IconComp className="icon" sx={{ color: "#cacaca" }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 550 }} variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography color="text.secondary">{desc}</Typography>
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
    transform: translateY(-8px);
  }
  .icon {
    position: absolute;
    font-size: 12rem;
    bottom: -5rem;
    left: -4rem;
    transition: all 0.3s ease;
  }
  #card:hover .icon {
    color: #ff9100;
    opacity: 0.6;
    transform: translateY(-8px);
  }
  .cardBody {

    padding: 2rem 8rem;
  }
`;
export default ProcessCard;
