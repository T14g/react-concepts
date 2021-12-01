import Counter from "./components/hooks/useState/counter.component";

function App() {
  return (
    <div className="App">
      <h2>Counter with useState</h2>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
