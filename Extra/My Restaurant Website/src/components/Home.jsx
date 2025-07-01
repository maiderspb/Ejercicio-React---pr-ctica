import React, { Component } from "react";

class Home extends Component {
  render() {
    const { dishes } = this.props;

    return (
      <section style={{ padding: "1rem" }}>
        <h2>Menú del día</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {dishes.map((dish) => (
            <li
              key={dish.id}
              style={{
                backgroundColor: "#fff8f0",
                marginBottom: "1rem",
                padding: "1rem",
                border: "1px solid #e0dcd1",
                borderRadius: "8px",
              }}
            >
              <strong>{dish.name}</strong> - €{dish.price}
              <p>{dish.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Home;
