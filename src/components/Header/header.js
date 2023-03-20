import Styles from "./header.module.scss";

function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.title}>
                <img src="http://ahtp.hochiminhcity.gov.vn/assets/ahtp/img/AHTP_LOGO.png" alt="logo" />
                <div className={Styles.h1}>
                    <h1 className="d-flex">KHU NÔNG NGHIỆP CÔNG NGHỆ CAO</h1>
                    <h1>THÀNH PHỐ HỒ CHÍ MINH</h1>
                </div>
            </div>
        </div>
    );
}

export default Header