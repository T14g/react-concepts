import { useState, useMemo } from 'react';
import CepCheckerStyles from './cep-checker.styles';

const VALID_CEPS = [
    '8888888',
    '1234567',
    '999999'
];

const CepValidated = ({ valid }) => {
    return valid ? (
        <div className="cep-result valid">Cep is Valid</div>
    ) : (
        <div className="cep-result not-valid">Cep is not valid</div>
    );
};

const CepChecker = () => {
    const [valid, setValid] = useState(false);
    const [cep, setCep] = useState('');

    const verify = () => {
        console.log("called is valid");

        let result = false;

        VALID_CEPS.forEach(current => {
            if (current === cep) {
                result = true;
            }
        });

        setValid(result);
    }

    const onChangeCep = (event) => {
        const { value } = event.target;
        setCep(value);
    }

    const resultMemoized = useMemo(() => <CepValidated valid={valid} />, [valid])

    return (
        <CepCheckerStyles>
            <p className="info">Verify if a postal Code is avaliable</p>
            <input type="text" className="cep" onChange={onChangeCep} />

            <button className="btn-verifyt" onClick={verify}>Verify Postal Code</button>

            {resultMemoized}


        </CepCheckerStyles>
    );
}

export default CepChecker;