import { useState } from 'react';
import CounterStyles from './counter.styles';

const Counter = ({ initialCount }) => {

    const sum10 = (value) => value + 10;

    // Um valor e uma função para atualizar esse valor
    const [count, setCount] = useState(() => {
        // Ideia útil caso o valor inicial seja algo demorado
        // Essa função dentro de useState() só roda na primeira renderização
        const initialValue = sum10(initialCount);
        return initialValue;
    });

    return (
        <CounterStyles>
            Count: {count}
            <button onClick={() => setCount(sum10(initialCount))}>Reset</button>
            {/* Prev tem o valor anterior do state  */}
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </CounterStyles>
    );
}

export default Counter;