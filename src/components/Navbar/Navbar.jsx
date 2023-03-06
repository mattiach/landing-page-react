import { useContext } from 'react'
import { ThemeContext } from '../../theme/Theme';
import { Lang } from '../../data/Lang';

// components
import Logo from '../Logo/Logo';
import Sun from '../svg/Sun';
import Moon from '../svg/Moon';

const Navbar = ({ changeLanguage, selectedValue, setSelectedValue }) => {
    const { toggleTheme, isDark } = useContext(ThemeContext);

    const handleChange = event => {
        setSelectedValue(event.target.value);
        changeLanguage(event.target.value);
    }

    return (
        <>
            <nav className="border-gray-200 pt-0 pb-2 rounded">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" className="flex items-center">
                        <Logo />
                    </a>
                    <div className="flex gap-2 mt-10">
                        <div className={`inline-flex items-center justify-center md:pt-3 sm:pt-0 text-sm text-gray-500 rounded cursor-pointer hover:ring-transparent ${!isDark ?? 'dark-mode'}`}>
                            <img src={`images/${selectedValue}.webp`} alt={`images/${selectedValue}.png`} width={20} height={20} />
                            <select
                                className={`select-languages border-0 text-gray-900 text-sm block w-full p-2 ring-transparent focus:ring-transparent ${isDark ? 'dark-mode dark:bg-transparent dark:text-white' : 'bg-white'}`}
                                value={selectedValue}
                                onChange={handleChange}
                            >
                                {
                                    Lang.map((lingua) => {
                                        return <option value={lingua.prefix} key={lingua.text}>{lingua.text}</option>
                                    })
                                }
                            </select>
                            <div className='ml-3'>
                                <button onClick={toggleTheme}>
                                    {isDark ? <Sun /> : <Moon />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar;