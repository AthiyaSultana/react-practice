import React, { Component } from "react";
import logo from "./logo.svg";
import Amount from "./Amount";
import Pound from "./Pound";
import Euro from "./Euro";
const App = () => (
  <Amount>
    {amount => (
      <div>
        <h1>My Currency convertor</h1>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  </Amount>
);
export default App;
