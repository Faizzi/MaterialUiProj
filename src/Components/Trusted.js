import { Typography } from "@mui/material";
import { Box, color, Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import TrustedCard from "../Helper/TrustedCard";
import face1 from "../data/images/face-1.jpg";
import face2 from "../data/images/face-2.jpg";
import face3 from "../data/images/face-3.jpg";
import face4 from "../data/images/face-4.jpg";
const Trusted = () => {
  return (
    <Wrapper>
      <Container>
        <Box id="mainBox">
          <Typography variant="h4">We Are Trusted</Typography>
          <Typography sx={{fontSize:"14px"}}  color="text.secondary">Access integrations and new features in a matter of seconds</Typography>
          <Box id="trustedCardBox">
            <TrustedCard
             cardTitle="Amazed by the product"
             cardDesc="Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad."
             trustiPic={face1}
             trustiName="Dan Shwartz"
             trustiQual="Software engineer"
            />
            <TrustedCard
             cardTitle="Very nice support"
             cardDesc="Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad."
             trustiPic={face2}
             trustiName="Hellen Miller"
             trustiQual="Accountant"
            />
            <TrustedCard
             cardTitle="My tasks are now painless"
             cardDesc="Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad."
             trustiPic={face3}
             trustiName="Jane Guzmann"
             trustiQual="CEO"
            />
            <TrustedCard
             cardTitle="My income has doubled"
             cardDesc="Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad."
             trustiPic={face4}
             trustiName="Anthony Leblanc"
             trustiQual="Founder at Hereby"
            />
           
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0rem;
  #mainBox{
      display: flex;
      flex-direction: column;
      gap: 1rem;
  }
  #trustedCardBox{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 1rem;
  }
`;
export default Trusted;
