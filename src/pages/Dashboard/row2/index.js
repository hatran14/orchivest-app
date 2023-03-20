import Style from './style.module.scss'
import { CardGroup, Card } from 'react-bootstrap'
import Tree from './plant.png'
import Form from 'react-bootstrap/Form'
import { useState, useEffect, useMemo } from 'react'
import { FetchData, PostData } from '../../../utils/test'
import { furl, last_data_url, data_url } from '../../../utils/url'
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
    const [Pump, setPump] = useState([]);
    const [Fan, setFan] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState('1');
    const [run, setRun] = useState(false);

    //data fetch
    // useEffect(() => {
    //     FetchData(furl + 'dadn-cnpm.1-pumper' + surl, setPump);
    //     FetchData(furl + 'dadn-cnpm.1-fan' + surl, setFan);
    // }, [])

    useEffect(() => {
        FetchData('https://io.adafruit.com/api/v2/hatran14/feeds/pump-test/data/last?x-aio-key=aio_Nkrh55KYxGJftv0IfU3OiiXq8GAq', setPump);
        FetchData('https://io.adafruit.com/api/v2/hatran14/feeds/fan-test/data/last?x-aio-key=aio_Nkrh55KYxGJftv0IfU3OiiXq8GAq', setFan);
    }, [])

    const [pumpChecked, setPumpChecked] = useState();
    const [fanChecked, setFanChecked] = useState();

    useMemo(() => {
        if (run) {
            const interval = setInterval(() => {
                FetchData(furl + 'dadn-cnpm.1-pumper' + last_data_url, setPump);
                FetchData(furl + 'dadn-cnpm.1-fan' + last_data_url, setFan); 
            }, 5000);
            return () => clearInterval(interval);
        }
        else {
            setRun(true);
            FetchData(furl + 'dadn-cnpm.1-pumper' + last_data_url, setPump);
            FetchData(furl + 'dadn-cnpm.1-fan' + last_data_url, setFan);
        }
    }, [run])

    // console.log(Pump, Fan)

    useMemo(() => {
        setPumpChecked(Pump?.value === '1' ? true : false)
        // console.log("pump")
    }, [Pump?.value])  

    useMemo(() => {
        setFanChecked(Fan?.value === '1' ? true : false)
        // console.log("fan")
    }, [Fan?.value])  

    // console.log(Pump?.value)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    };

    const handlePumpChange = (event) => {
        const value = event.target.checked ? '1' : '0'
        PostData(furl + 'dadn-cnpm.1-pumper' + data_url, { value: value })
        setPump({ value: value })
    }

    const handleFanChange = (event) => {
        const value = event.target.checked ? '1' : '0'
        PostData(furl + 'dadn-cnpm.1-fan' + data_url, { value: value })
        setFan({ value: value })
    }

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
        <CardGroup className={`d-flex pt-2 pb-2 px-4 py-4 gap-4 ${Style['card-group']}`}>
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
                            <Line data={tempData}/>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className={Style.card2}>
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
                            <div className={Style.row}>Fan</div>
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
                                        onChange={(event) => handlePumpChange(event)}
                                        label={pumpChecked ? "ON" : "OFF"}
                                        checked={pumpChecked}                        
                                    >
                                    </Form.Check>
                                </Form>
                            </div>
                            <div className={Style.row}>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label={fanChecked ? "ON" : "OFF"}
                                        onChange={(event) => handleFanChange(event)}
                                        checked={fanChecked}
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