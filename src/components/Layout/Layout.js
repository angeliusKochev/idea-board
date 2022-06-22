/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <header>
                <h1>Idea Board</h1>
            </header>
            <main>{children}</main>
            <footer>
                &copy; 2022 <a href="#">Angel Kochev</a>
            </footer>
        </React.Fragment>
    );
};

export default Layout;
