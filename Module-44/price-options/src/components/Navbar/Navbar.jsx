import { useState } from "react";
import Links from "./Link/Links";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";



const Navbar = () => {

    const [open,setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "User Profile", path: "/profile/:userId" } // Dynamic route with user ID
      ];

    return (
        <nav>
          
          <div className="md:hidden" onClick={()=> setOpen(!open)} >

            {
                open == true ? 
                <CiMenuBurger className="text-3xl "></CiMenuBurger> : 
                <MdOutlineClose className="text-3xl"></MdOutlineClose>
            }
                
          </div>
           
            <ul className="flex gap-3">
                {
                    routes.map(route => <Links 
                        key={route.id}
                        route = {route}
                        ></Links> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;