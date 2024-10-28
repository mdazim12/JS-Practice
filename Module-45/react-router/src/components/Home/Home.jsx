import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="text-green-600">
            <Header></Header>
            This is main home
            <Outlet></Outlet>
        </div>
    );
};

export default Home;