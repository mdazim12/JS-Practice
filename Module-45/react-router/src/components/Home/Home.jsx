import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {

    const navigation = useNavigation()
    const loacation = useLocation()
    console.log(loacation)

    return (
        <div className="home">
            <Header></Header>
            {
                navigation.state === "loading" ?
                <p className="red">Loading</p> : <Outlet></Outlet>
            }
           
            
            <Footer></Footer>
        </div>
    );
};

export default Home;