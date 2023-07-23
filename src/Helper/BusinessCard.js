import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const BusinessCard = (props) => {
  const { IconComp, text } = props;
  return (
    <Wrapper>
      <Box className="cardSet">
        <Box className="iconSet">
          <IconComp className="mainIcon" />
        </Box>
        <Typography className="cardText">{text}</Typography>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .iconSet {
    width: 42%;
    margin: 0 auto;
    padding: 24px 0px;
    border-radius: 50%;
    transition: all 0.4s ease;
    margin-bottom: 1rem;
    :hover {
      box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%),
        0px 5px 22px 4px rgb(0 0 0 / 12%);
    }
  }
  .iconSet:hover .mainIcon {
    color: #3f51b5;
  }
  .mainIcon {
    transition: all 0.4s ease;
    font-size: 3.5rem;
  }
  .cardText {
    font-size: 14px;
  }
  .cardSet {

    text-align: center;
  }
`;
export default BusinessCard;
