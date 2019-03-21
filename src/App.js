import React, { Component } from "react";
import logo from "./logo.svg";
import Amount from "./Amount";
import Pound from "./Pound";
import Euro from "./Euro";
import Practise from "./Practise";
class App extends Component {
  render() {
    return (
      // <Amount>
      //   {amount => (
      //     <div>
      //       <h1>My Currency convertor</h1>
      //       <Pound amount={amount} />
      //       <Euro amount={amount} />
      //     </div>
      //   )}
      // </Amount>
      <div className="container">
        <Practise />
      </div>
    );
  }
}
export default App;
