import styled from "styled-components";

const HeaderStyles = styled.header`
    background: #000;
    padding: 5px 15px;

    ul {
        list-style: none;
        display: flex;
        justify-content: center;

        li {
            &:not(:last-child){
                margin-right: 10px;
            }
            button{
                background: none;
                border: none;
                color: #fff;
                font-size: 20px;
            }
        }
    } 
`;

export default HeaderStyles;