import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import Header from "../Header/header";
import NavigationBar from "../NavigationBar/navigation-bar";
import Styles from "./layout.module.scss";

const Layout = ({ children }) => {
    const [show, setShow] = React.useState(false);

    console.log(show);

    return (
        <>
            <div className={Styles.header} style={show === true ? {zIndex : 1} : {zIndex : 0}}>
                <Header setShow={setShow} />
            </div>
            <div className={Styles.navbar} >
                <NavigationBar />
            </div>
            <main className={Styles.content}>{children}</main>
        </>
    )
}

export default Layout;