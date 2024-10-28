import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
           <h1> This is main home</h1>
           <p>Best application over the world by me</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;