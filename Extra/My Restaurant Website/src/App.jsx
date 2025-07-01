import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    const dishes = [
      { id: 1, name: "Plato 1", description: "Este es el plato 1", price: 10 },
      { id: 2, name: "Plato 2", description: "Este es el plato 2", price: 20 },
      { id: 3, name: "Plato 3", description: "Este es el plato 3", price: 15 },
    ];

    return (
      <div>
        <Header />
        <Home dishes={dishes} />
        <Contact />
      </div>
    );
  }
}

export default App;

