import React, { Component } from "react";

class Book extends Component {
  state = {
    showBookInfo: false
  };

  render() {
    const { name, email, age } = this.props;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            className="fas fa-sort-down"
            onClick={() => {
              this.setState({ showBookInfo: !this.state.showBookInfo });
            }}
          />
        </h4>
        {this.state.showBookInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Age: {age}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Book;
