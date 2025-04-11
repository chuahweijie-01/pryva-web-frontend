import { NavLink } from 'react-router-dom'
import logo from '../assets/corgi.jpg'
const Navbar = () => {

    const linkActivation = (isActive: boolean) => {
        return isActive ? "font-bold" : 'none';
    }

    return (
        <header>
            <nav className="bg-white shadow-xs pl-4 pr-8 py-1">
                <div className="flex justify-between items-center">
                    <div>
                        <img src={logo} alt="pyrva" className="w-25 h-25"></img>
                    </div>
                    <div className="space-x-8 text-lg">
                        <NavLink to="/home" className={({ isActive }) => linkActivation(isActive)}>Home</NavLink>
                        <NavLink to="/products" className={({ isActive }) => linkActivation(isActive)}>Products</NavLink>
                        <NavLink to="/horoscope" className={({ isActive }) => linkActivation(isActive)}>Horoscope</NavLink>
                        <NavLink to="/about" className={({ isActive }) => linkActivation(isActive)}>About Pryva</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar


