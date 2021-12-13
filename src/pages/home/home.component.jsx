import HomeStyles from './home.styles';
import Counter from '../../components/hooks/useState/counter.component';
import TitleChanger from '../../components/hooks/useEffect/titleChanger.component';
import User from '../../components/user/user.component';
import FriendList from '../../components/friend-list/friend-list.component';
import Counter2 from '../../components/hooks/useReducer/counter.component';
import CustomForm from '../../components/hooks/useMemo/custom-form.component';
import FocusOnClick from '../../components/hooks/useRef/focus-onclick.component';

const Home = () => {
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
        <HomeStyles>
            <div className="container">
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
                <hr />
                <h2>Counter2 Component using useReducer instead of useState</h2>
                <Counter2 />
                <hr />

                <h2>Customform with useMemo</h2>
                <CustomForm />
                <hr />

                <h2>Using useRef to Focus on input element when you click the button</h2>
                <p>Obs: useRef doesn't cause re-render</p>
                <FocusOnClick />
            </div>
        </HomeStyles>
    );
}

export default Home;