import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Deals from "./components/Deals";
import OnlineFood from "./components/OnlineFood";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
        <Header />
        <Category />
        <Deals/>
        <OnlineFood/>
        <Footer/>
    </>
  );
};

export default App;
