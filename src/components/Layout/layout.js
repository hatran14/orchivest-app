import React from "react";
import Header from "../Header/header";
import NavigationBar from "../NavigationBar/navigation-bar";
import Styles from "./layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <div className={Styles.header}>
                <Header />
            </div>
            <div className={Styles.navbar}>
                <NavigationBar />
            </div>
            <main className={Styles.content}>{children}</main>
        </>
    )
}

export default Layout;