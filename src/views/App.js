import React from "react";
// Global style
import GlobalStyle from "../styles/GlobalStyle";
// Import pages
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import OurWork from "./Works/OurWork";
import Nav from "../components/Nav";
import MovieDetail from "./Works/views/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence, AnimationPresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
