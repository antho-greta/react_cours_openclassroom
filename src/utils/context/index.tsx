import {createContext, ReactNode, useState} from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}:ThemeProviderProps) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = ():void  => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}