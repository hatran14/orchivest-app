import Style from './style.module.scss'
import { CardGroup, Card } from 'react-bootstrap'
import Tree from './plant.png'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function InfoGroup() {
    //{`container top-3 ${isActive ? "shadow": ""}`}
    //d-flex p-4 gap-4
    const [checked, setChecked] = useState();
    const [selectedIndex, setSelectedIndex] = useState('1');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    };

    const xlabels = ['1', '2', '3', '4', '5', '6', '7'];
    const ldata = [
        {
            key: '1',
            labels: xlabels,
            datasets: [
                {
                    label: 'Temperature over 7 hours',
                    data: [30, 32, 35, 37, 33, 34, 31],
                    backgroundColor: 'rgba(0, 45, 87, 1)',
                }
            ],
        },
        {
            key: '2',
            labels: xlabels,
            datasets: [
                {
                    label: 'Air Humidity over 7 hours',
                    data: [30, 32, 35, 37, 33, 34, 31],
                    backgroundColor: 'rgba(0, 45, 87, 1)',
                }
            ],
        },
        {
            key: '3',
            labels: xlabels,
            datasets: [
                {
                    label: 'Illuminance over 7 hours',
                    data: [30, 32, 35, 37, 33, 34, 31],
                    backgroundColor: 'rgba(0, 45, 87, 1)',
                }
            ],
        },
        {
            key: '4',
            labels: xlabels,
            datasets: [
                {
                    label: 'Soil Moisture over 7 hours',
                    data: [30, 32, 35, 37, 33, 34, 31],
                    backgroundColor: 'rgba(0, 45, 87, 1)',
                }
            ],
        }
    ];
    const tempData = ldata.find(data => data.key === selectedIndex);
    return (
        <CardGroup className={`d-flex p-4 gap-4 ${Style['card-group']}`}>
            <Card className={Style.card1}>
                <Card.Body>
                    <Card.Title>Đồ thị</Card.Title>
                    <div className={Style.card1_inner}>
                        <div className='col-3'>
                            <List component="nav" aria-label="feature list">
                                <ListItemButton
                                    selected={selectedIndex === '1'}
                                    onClick={(event) => handleListItemClick(event, '1')}
                                >
                                    <ListItemText primary="Temparature" />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === '2'}
                                    onClick={(event) => handleListItemClick(event, '2')}
                                >
                                    <ListItemText primary="Air Humidity" />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === '3'}
                                    onClick={(event) => handleListItemClick(event, '3')}
                                >
                                    <ListItemText primary="Illuminance" />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === '4'}
                                    onClick={(event) => handleListItemClick(event, '4')}
                                >
                                    <ListItemText primary="Soil Moisture" />
                                </ListItemButton>
                            </List>
                        </div>
                        <div className={Style.graph}>
                            <Line data={tempData} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>About cây</Card.Title>
                    <div className={Style.card2_inner}>
                        <div className="col-3">
                            <img src={Tree} alt="Orchid" id={Style.tree} width='200'></img>
                        </div>
                        <div className="col-4">
                            <div className={Style.row}>Age:</div>
                            <div className={Style.row}>Height:</div>
                            <div className={Style.row}>Last pumped: </div>
                            <div className={Style.row}>Pumper</div>
                        </div>
                        <div className="col-4">
                            <div className={Style.row}>XXX</div>
                            <div className={Style.row}>YYY</div>
                            <div className={Style.row}>ZZZ</div>
                            <div className={Style.row}>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        onChange={() => { setChecked(!checked) }}
                                        label={checked ? "ON" : "OFF"}
                                    >
                                    </Form.Check>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default InfoGroup