import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
const CardComp = (props) => {
  const { IconComp, title } = props;
  return (
    <Wrapper>
      <Card id="card" sx={{ minWidth: 275, paddingTop: "10px" }}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box sx={{ border: "2px solid #ff9100", borderRadius: "50%", padding: "10px", backgroundColor: "#ffeed8" }}>
            <IconComp sx={{ color: "#ff9100" }} />
          </Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  #card {
    transition: all 0.3s ease;
  }
  #card:hover {
    box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%);
  }
`;
export default CardComp;
