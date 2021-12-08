import HeaderStyles from './header.styles';

const Header = () => {

    return (
        <HeaderStyles>
            <ul>
                <li>
                    <button>Hooks</button>
                </li>
                <li>
                    <button>Conditional Render</button>
                </li>
            </ul>
        </HeaderStyles>
    );
}

export default Header;