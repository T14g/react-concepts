import styled from "styled-components";

const CepCheckerStyles = styled.div`
    padding-bottom: 20px;

    .info{
        font-size: 20px;
    }

    .btn-verify{}

    .cep-result{
        font-size: 30px;
        font-weight: 600;

        &.not-valid{
            color: orange;
        }

        &.valid{
            color: green;
        }
    }
`;

export default CepCheckerStyles;