import Styles from "./navbar.module.scss";

function NavBar() {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.title}>
                Orchivest
            </div>
        </div>
    );
}

export default NavBar