import TitleChanger from "./components/hooks/useEffect/titleChanger.component";
import Counter from "./components/hooks/useState/counter.component";

function App() {
  return (
    <div className="App">
      <h2>Counter with useState</h2>
      <Counter initialCount={0} />

      <hr />

      <h2>Title changer with useEffect</h2>
      <TitleChanger />

    </div>
  );
}

export default App;
