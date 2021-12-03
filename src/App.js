import TitleChanger from "./components/hooks/useEffect/titleChanger.component";
import Counter from "./components/hooks/useState/counter.component";
import User from "./components/user/user.component";

function App() {
  return (
    <div className="App">
      <h2>Counter with useState</h2>
      <Counter initialCount={0} />
      <hr />

      <h2>Title changer with useEffect</h2>
      <TitleChanger />
      <hr />

      <h2>Custom useUserStatus Hook use on User Component</h2>
      <User id={'1'} />
      <User id={'2'} />
      <User id={'3'} />


    </div>
  );
}

export default App;
