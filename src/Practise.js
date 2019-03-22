import React, { Component } from "react";
import Book from "./Book";

class Practise extends Component {
  state = {
    showUserInfo: false,
    data: [
      {
        name: "Athiya Sultana",
        age: 22,
        email: "athiya@mailinator.com",
        id: 1,
        ishidden: false
      },
      {
        name: "Mounica",
        age: 23,
        email: "mounica@mailinator.com",
        id: 2,
        ishidden: false
      },
      {
        name: "Swetha",
        age: 24,
        email: "swetha@mailinator.com",
        id: 3,
        ishidden: false
      }
    ]
  };

  setInfo = user => {
    this.setState(() => {
      return (user.ishidden = !user.ishidden);
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map(user => (
          // <Book
          //   name={user.name}
          //   key={user.id}
          //   email={user.email}
          //   age={user.age}
          // />
          <div key={user.id}>
            <h1 onClick={this.setInfo.bind(this, user)}>{user.name}</h1>
            {user.ishidden ? (
              <ul>
                <li>{user.age}</li>
                <li>{user.email}</li>
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}
export default Practise;
