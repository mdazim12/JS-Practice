import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <nav>
            
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
       


            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
        </nav>
    );
};

export default Header;