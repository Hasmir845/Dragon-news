import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/LayoutComponents/LeftNavbar";
import RightNav from "../Components/LayoutComponents/RightNav";
import Navbar from "../Components/Navbar";


const HomeLayout = () => {
    return (
        <div className=" font-poppins">
            <header>
                <Header></Header>
                <section className=" w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className=" w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>

            <main className=" w-11/12 mx-auto py-5 grid justify-center md:grid-cols-12 gap-3">
                <aside className=" col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className=" col-span-6"><Outlet></Outlet></section>
                <aside className=" col-span-3"><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;