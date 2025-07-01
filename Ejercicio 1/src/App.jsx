import Counter from "./Counter";

function App() {
  return (
    <div className="app-container">
      <h1>Contador Personalizado</h1>

      <Counter initial={10} step={3} />

      <Counter initial={100} step={10} />
    </div>
  );
}

export default App;

