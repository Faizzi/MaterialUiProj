import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import ProcessCard from "../Helper/ProcessCard";
import SettingsIcon from "@mui/icons-material/Settings";
import DvrIcon from "@mui/icons-material/Dvr";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

const Process = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Box id="topData" sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography variant="h4">Integrate Your Process</Typography>
            <Typography sx={{ fontSize: "17px", color: "#000" }}>
              Access integrations and new features in a matter of seconds
            </Typography>
          </Box>
          <Box id="bottomCards">
            <ProcessCard
              IconComp={AccessAlarmsIcon}
              title="Choose Technology"
              desc="Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
                     "
            />
            <ProcessCard
              IconComp={SettingsIcon}
              title="Setup Workflows"
              desc="Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
                     "
            />
            <ProcessCard
              IconComp={DvrIcon}
              title="Learn from Data"
              desc="Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
                     "
            />
            <ProcessCard
              IconComp={MultilineChartIcon}
              title="Scale Up"
              desc="Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
                     "
            />
          </Box>
          <Box className="trialBtn">
            <Button
              className="trialBtnSet"
              sx={{ textTransform: "capitalize", backgroundColor: "#ff9100", color: "#000" }}
              variant="contained"
            >
              Start Your Free Trial
            </Button>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 6rem 0rem;
  #bottomCards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }
  .trialBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .trialBtnSet {
    transition: all 0.3s ease;
    :hover {
      background-color: #ff6d00;
    }
  }
  @media (max-width: 1032px) {
    #bottomCards {
      grid-template-columns: 1fr;
    }
  }
`;
export default Process;
