import { Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import React, { useState } from "react";
import styled from "styled-components";
import login from "../data/images/login.jpg";
import calender from "../data/images/calendar.jpg";
import dashboard from "../data/images/dashboard.jpg";
const ViewService = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState();

  return (
    <Wrapper>
      <Container>
        <Box>
          <Box>
            <Tabs value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
              <Tab label="LOGIN" onClick={() => setData("LOGIN")} />
              <Tab label="DASHBOARD" onClick={() => setData("DASHBOARD")} />
              <Tab label="CALENDER" onClick={() => setData("CALENDER")} />
            </Tabs>
          </Box>
          <Box id="dataBox">
            <Box className="imgBox">
              {/* <img src={login} alt={"loginPic"} /> */}
              <img src={data === "LOGIN" ? login : data === "DASHBOARD" ? dashboard : calender} />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 550 }}>
                {data === "LOGIN"
                  ? "Clean & minimal login UI"
                  : data === "DASHBOARD"
                  ? "Minimal & smart dashboard"
                  : "Manage your tasks & project efficiently"}
              </Typography>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis
                  mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te,
                  aperiam nostrum ut per.
                </Typography>
              </Box>
              <Box>
                <Button sx={{ textTransform: "capitalize" }} endIcon={<ChevronRightIcon />}>
                  View details
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #f7f7f7;
  padding: 3rem 0rem;
  #dataBox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
  }
  .imgBox img {
    width: 100%;
  }
`;
export default ViewService;
