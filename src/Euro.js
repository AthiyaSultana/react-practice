import React, { Component } from "react";
class Euro extends Component {
  render() {
    const amount = this.props.amount * 0.012;
    return (
      <div>
        <p>Amount in Euro: {amount}</p>
      </div>
    );
  }
}
export default Euro;
