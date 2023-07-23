import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import theme from "./styles/Theme";
import Services from "./Components/Services";
import Process from "./Components/Process";
import ViewService from "./Components/ViewService";
import Business from "./Components/Business";
import Matters from "./Components/Matters";
import Trusted from "./Components/Trusted";
import Demo from "./Components/Demo";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Nav />
        <Hero />
        <Services />
        <Process />
        <ViewService />
        <Business />
        <Matters />
        <Trusted/>
        <Demo/>
        <Pricing/>
        <Contact/>
        <Footer/>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
