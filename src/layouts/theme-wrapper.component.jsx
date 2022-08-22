import React , {useState , useEffect} from 'react';
import { ThemeContext , themes } from '../context';

const ThemeWrapper = ({children}) => {
    const [theme , setTheme] = useState(themes.light);

    const changeTheme = (theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.dark:
                document.body.classList.add('dark')
                break;
            case themes.light:
            default:
                document.body.classList.remove('dark')
                break;
        }
    } , [theme])

    return(
        <ThemeContext.Provider value={{theme:theme , changeTheme : changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeWrapper