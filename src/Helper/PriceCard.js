import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
const PriceCard = (props) => {
  const { cardStyle, category, level, pay, bandwidth, connection, ram, access, users, analytics } = props;
  return (
    <Wrapper>
      <Card className="card" outlined>
        <Box className={cardStyle}>
          <Typography gutterBottom>{category}</Typography>
          <Typography variant="body3">{level}</Typography>
        </Box>
        <CardContent>
          <Box className="priceTextData">
            <Typography variant="h4">{pay}</Typography>
            <Typography>{bandwidth}</Typography>
            <Typography>{connection}</Typography>
            <Typography>{ram}</Typography>
            <Typography color="text.secondary">{access}</Typography>
            <Typography color="text.secondary">{users}</Typography>
            <Typography color="text.secondary">{analytics}</Typography>
          </Box>
        </CardContent>
        <CardActions className="learnBtn">
          <Button className="learnBtnSet" sx={{ textTransform: "capitalize" }} variant="contained" size="small">
            Choose
          </Button>
        </CardActions>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card {
    text-align: center;
    border-radius: 10px;
    margin-top: 2rem;
    :hover {
      box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%),
        0px 5px 22px 4px rgb(0 0 0 / 12%);
    }
  }
  .cardHeader {
    background-color: #f9f9f9;
    padding: 1rem 0rem;
  }
  .cardUnique {
    background-color: #3f51b5;
  }
  .priceTextData {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .learnBtn {
    display: block;
    margin: 1.5rem auto;
  }
  .learnBtnSet {
    color: #000;
    background-color: #ff9100;
    transition: all 0.4s ease;
    font-weight: 550;
    :hover {
      background-color: #ff6d00;
    }
  }
`;
export default PriceCard;
