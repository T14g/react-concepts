import { useState } from 'react';
import CounterStyles from './counter.styles'; 

const Counter = ({ initialCount }) => {

    // Um valor e uma função para atualizar esse valor
    const [count, setCount] = useState(initialCount);

    return (
        <CounterStyles>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </CounterStyles>
    );
}

export default Counter;