import { createContext } from "react";

const theme = {
    bacground: '#000',
    color: '#fff',
};

const ThemeContext = createContext(theme);

export default ThemeContext;