import Style from './style.module.scss'
import { CardGroup, Card } from 'react-bootstrap'
import React from 'react'

function StatusCard(props) {
    const titles = ['Temperature', 'Humidity', 'Illumination', 'Soil Moisture']
    const icons = ['fa-solid fa-temperature-low', 'fa-solid fa-droplet', 'fa-solid fa-sun', 'fa-solid fa-droplet']

    // console.log(props.data[0][0])

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
                            {render(title, props.data[index])}
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