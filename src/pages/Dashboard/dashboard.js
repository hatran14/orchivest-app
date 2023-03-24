import StatusCard from "./row1";
import InfoGroup from "./row2";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Style from "./style.module.scss";

function SelectTree() {
    const [tree, setTree] = useState("Plant 1"); //default value

    const handleChange = (e) => {
        setTree(e.target.textContent);
    }

    return (
        <Dropdown className="d-flex justify-content-start pt-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className={Style.dropdownStyle}>
                {tree}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => handleChange(e)}>Plant 1</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleChange(e)}>Plant 2</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleChange(e)}>Plant 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

function Dashboard() {

    return (
        <div>
            <SelectTree />
            <StatusCard />
            <InfoGroup />
        </div>
    );
}

export default Dashboard;