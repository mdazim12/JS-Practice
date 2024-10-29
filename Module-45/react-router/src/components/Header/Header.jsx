import {  NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <nav>
            
            

            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/about">About</NavLink>
            <NavLink to = "/contact">Contact</NavLink>
            <NavLink to = "/users">Users</NavLink>
            <NavLink to = "/posts">Posts</NavLink>
       


            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
        </nav>
    );
};

export default Header;