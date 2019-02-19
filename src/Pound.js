import React, { Component } from "react";
class Pound extends Component {
  render() {
    const amount = this.props.amount * 0.011;
    return (
      <div>
        <p>Amount in Pound: {amount}</p>
      </div>
    );
  }
}
export default Pound;
