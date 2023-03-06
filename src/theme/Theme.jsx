import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext({}); // fix: create the context

export function ThemeProvider(props) {
    const [isDark, setisDark] = useState(false)

    // Get the current theme from the context
    const theme = useContext(ThemeContext);

    const toggleTheme = () => {
        setisDark(!isDark);
    }

    return (
        <ThemeContext.Provider
            value={{
                ...theme,
                isDark,
                toggleTheme
            }}
        >
            {props.children}
        </ThemeContext.Provider>

    );
}