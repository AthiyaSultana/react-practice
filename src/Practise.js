import React, { Component } from "react";
import Book from "./Book";

class Practise extends Component {
  state = {
    data: [
      {
        name: "Athiya Sultana",
        age: 22,
        email: "athiya@mailinator.com",
        id: 1
      },
      { name: "Mounica", age: 23, email: "mounica@mailinator.com", id: 2 },
      { name: "Swetha", age: 24, email: "swetha@mailinator.com", id: 3 }
    ]
  };
  render() {
    const { data } = this.state;
    console.log("users", data);
    return (
      <div>
        {data.map(user => (
          <Book
            name={user.name}
            key={user.id}
            email={user.email}
            age={user.age}
          />
        ))}
      </div>
    );
  }
}
export default Practise;
