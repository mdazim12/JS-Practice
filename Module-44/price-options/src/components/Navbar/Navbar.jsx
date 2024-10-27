import Links from "./Link/Links";


const Navbar = () => {

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "User Profile", path: "/profile/:userId" } // Dynamic route with user ID
      ];

    return (
        <nav>
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