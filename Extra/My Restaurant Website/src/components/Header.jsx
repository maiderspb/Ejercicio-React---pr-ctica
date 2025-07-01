import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f4f4f4" }}>
        <h1 style={{ marginBottom: "0.5rem" }}>My Restaurant Website</h1>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "normal", color: "#555" }}>
          🍷 A taste of tradition, served with style
        </h2>
        <h3 style={{ marginTop: "1rem" }}>Welcome</h3>
        <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.5" }}>
          At My Restaurant, we blend authentic flavors with a warm, inviting atmosphere. Whether you're here for a quick bite or a special celebration, we promise a memorable dining experience.
        </p>
      </header>
    );
  }
}

export default Header;
