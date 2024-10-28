import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="text-green-600">
            <Header></Header>
           <h1> This is main home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;