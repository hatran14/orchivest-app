import Styles from "./header.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { Dropdown } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";


function Header(props) {


    return (
        <div className={Styles.header}>
            <div className={Styles.title}>
                <img src={logo} alt="logo" />
                <div className={Styles.h1}>
                    <h1>KHU NÔNG NGHIỆP CÔNG NGHỆ CAO</h1>
                    <h1>THÀNH PHỐ HỒ CHÍ MINH</h1>
                </div>
            </div>
            <div className={Styles.right}>
                <Carousel
                    nextIcon={<span aria-hidden="true" />}
                    prevIcon={<span aria-hidden="true" />}
                    indicators={false}
                    fade={true}
                    className={Styles.slider}
                >
                    <Carousel.Item>
                        <img src={slide1} className={Styles.img} alt="img1"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img src={slide2} className={Styles.img} alt="img2"/>
                    </Carousel.Item>
                </Carousel>

                <div className={Styles.account}>
                    <Dropdown className="d-flex justify-content-start pt-2">
                        <Dropdown.Toggle 
                            variant="success" 
                            id="dropdown-basic" 
                            className={Styles.dropdownStyle}
                        >
                            Phan Hải Hà
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end" >
                            <Dropdown.Item >Thông tin cá nhân</Dropdown.Item>
                            <Dropdown.Item >Đăng xuất</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

        </div>
    );
}

export default Header