import TitleChanger from "./components/hooks/useEffect/titleChanger.component";
import Counter from "./components/hooks/useState/counter.component";
import User from "./components/user/user.component";
import FriendList from "./components/friend-list/friend-list.component";
import ThemeContext from "./contexts/themeContext";
import { useContext } from "react";

function App() {
  const users = [
    {
      'id': '1',
    },
    {
      'id': '2',
    },
    {
      'id': '3',
    }
  ];

  return (
          <div className="App">
            <h2>Counter with useState</h2>
            <Counter initialCount={0} />
            <hr />

            <h2>Title changer with useEffect</h2>
            <TitleChanger />
            <hr />

            <h2>Custom useUserStatus Hook use on each User Component</h2>
            <User id={'1'} />
            <User id={'2'} />
            <User id={'3'} />
            <hr />

            <h2>FriendList component using useUserStatusHook Also</h2>
            <FriendList list={users} />
        </div>

  );
}

export default App;
