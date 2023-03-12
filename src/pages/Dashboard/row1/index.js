import Style from './style.module.scss'
import { CardGroup, Card } from 'react-bootstrap'
import React from 'react'
import { useMemo, useState } from 'react'
import { FetchData } from '../../../utils/test'
import { furl, surl } from '../../../utils/url'

function StatusCard() {
    const [TempData, setTempData] = useState([]);
    const [HumidData, setHumidData] = useState([]);
    const [LightData, setLightData] = useState([]);
    const [MoistData, setMoistData] = useState([]);
    const [run, setRun] = useState(false);

    const feed_keys = ['dadn-cnpm.1-temp', 'dadn-cnpm.1-humidity', 'dadn-cnpm.1-light', 'dadn-cnpm.1-soilmoist']
    const setters = [setTempData, setHumidData, setLightData, setMoistData]

    useMemo(() => {
        if (run) {
            const interval = setInterval(() => {
                feed_keys.map((key, index) => {
                    FetchData(furl + key + surl, setters[index]);
                })
            }, 5000);
            return () => clearInterval(interval);
        }
        else {
            setRun(true);
            feed_keys.map((key, index) => {
                FetchData(furl + key + surl, setters[index]);
            })
        }
    }, [run])

    const data = [TempData, HumidData, LightData, MoistData]

    // console.group(run)
    // console.log(data)
    // console.groupEnd()

    const titles = ['Temperature', 'Humidity', 'Illumination', 'Soil Moisture']
    const icons = ['fa-solid fa-temperature-low', 'fa-solid fa-droplet', 'fa-solid fa-sun', 'fa-solid fa-droplet']

    const render = (title, data) => {
        const val = data[0]?.value

        if (title === 'Temperature') {
            return val ? val + ' °C' : '';
        }

        else if (title === 'Humidity') {
            return val ? val + ' %' : ''
        }

        else if (title === 'Illumination') {
            return val ? val + ' lx' : ''
        }

        else {
            return val ? val + ' %' : ''
        }
    }

    return (
        <CardGroup className='d-flex p-4 gap-4'>
            {titles.map((title, index) =>
                <Card key={index} className={Style.card}>
                    <Card.Body className='pb-2'>
                        <Card.Title className={Style.title}>
                            <i className={`me-2 ${icons[index]}`}></i>
                            {title}
                        </Card.Title>
                        <Card.Text className={`align-middle ${Style.text}`}>
                            {render(title, data[index])}
                        </Card.Text>
                        <div className={Style.flag}>
                            <div className={Style.low}>Low</div>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </CardGroup>
    )
}

export default StatusCard