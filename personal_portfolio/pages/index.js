import React from "react";

import {
  Banner,
  Contact,
  Development,
  Frameworks,
  Services,
} from "../components";

import { Footer, Nav } from "../layouts";

const Home = () => {
  return (
    <div className="">
      <Nav />
      <Banner />
      <Frameworks />
      <Services />
      <Development />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
