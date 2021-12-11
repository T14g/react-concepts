import { useMemo, useState } from 'react';

const rules = [
    '8 caracteres',
    'lowercase word',
    'uppercase word'
];

const Errors = ({ active }) => {
    return active && (
        <ul>
            {
                rules.map((value, index) => (
                    <li key={index}>{value}</li>
                ))
            }
        </ul>
    );
};

const CustomForm = () => {
    const [password, setPassword] = useState('');
    const [showErrors, setShowErros] = useState(false);

    const checkPassword = event => {
        const { value } = event.target;
        setShowErros(value.length < 8);
        setPassword(value);
    };

    // Optimization using memoization to return the same value if showErrors dont change, preventing Re-render of <Errors />
    const memoizedErrors = useMemo(() => <Errors active={showErrors} />, [showErrors]);

    return (
        <form>
            <h1>Login</h1>
            <input placeholder='email' />
            <input type="password"
                value={password}
                onChange={checkPassword}
            />
            {memoizedErrors}
        </form>
    );
}

export default CustomForm;