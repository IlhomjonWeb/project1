import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import '../../src/index.scss';

const Mainlayout = () => {
    return (
        <>

            <header className="container">
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* <Footer /> */}
            </footer>
        </>
    )
}

export default Mainlayout
