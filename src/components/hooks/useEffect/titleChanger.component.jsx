import { useEffect, useState } from "react";
import TitleChangerStyles from "./titleChanger.styles";

const TitleChanger = () => {

    const [title, setTitle] = useState('App Title');

    // Executado toda vez que o title muda
    useEffect(() => {
        document.title = title;
    });

    return (
        <TitleChangerStyles>
            <input type="text" placeholder="Digite o título da página" onChange={(e) => setTitle(e.target.value)} />
        </TitleChangerStyles>
    );
}

export default TitleChanger;