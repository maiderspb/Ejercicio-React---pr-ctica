import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";

function App() {
  const dishes = [
    { id: 1, name: "Plato 1", description: "Este es el plato 1", price: 10 },
    { id: 2, name: "Plato 2", description: "Este es el plato 2", price: 20 },
    { id: 3, name: "Plato 3", description: "Este es el plato 3", price: 15 },
  ];

  return (
    <div>
      <Header />
      <Home dishes={dishes} />
    </div>
  );
}

export default App;
