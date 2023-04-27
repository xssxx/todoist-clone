import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Preview from "./Preview";
import Contact from "./Contact";
import Phone from "./Phone";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Preview />
      <Contact />
      <Phone />
      <Footer />
    </div>
  );
};

export default Home;
