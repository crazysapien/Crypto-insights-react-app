import React from 'react';

export const themes = {
    dark: {
    text : 'text-white',
    backgroud : 'bg-black',
    },
    light : {
    text : 'text-black',
    backgroud : 'bg-white',
    }
};

const ThemeContext = React.createContext(themes.light);
export default ThemeContext;