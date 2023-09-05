import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsAppIcon from "../components/WhatsAppIcon";

const FrontLayout = (props) => {
  const { children } = props;
  return (
    <div className="App">
      <Header isStickyHeader={true} />
      <div>{children}</div>
      <WhatsAppIcon />
      <Footer />
    </div>
  );
};
export default FrontLayout;
