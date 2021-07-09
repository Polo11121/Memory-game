import React from "react";
import "./Home.css";
import { Button } from "@material-ui/core";
const Home = ({ setIsGameStarted }) => {
  return (
    <div className="home">
      <img
        src="https://flamingtext.com/net-fu/proxy_form.cgi?script=smurfs-logo&fontsize=159&text=Memory+Game&script=smurfs-logo&text=Memory+Game&fontsize=159&imageoutput=true"
        alt="logo"
      />
      <Button onClick={() => setIsGameStarted(true)}>START!</Button>
    </div>
  );
};

export default Home;
