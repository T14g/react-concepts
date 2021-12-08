import Counter from '../../components/hooks/useState/counter.component';
import TitleChanger from '../../components/hooks/useEffect/titleChanger.component';
import User from '../../components/user/user.component';
import FriendList from '../../components/friend-list/friend-list.component';
import Counter2 from '../../components/hooks/useReducer/counter.component';

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
        <>
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


        </>
    );
}

export default Home;