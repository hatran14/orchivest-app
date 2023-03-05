import Style from './style.module.scss'
import { CardGroup, Card } from 'react-bootstrap'
import React from 'react'

function StatusCard() {
    let titles = ['Temperature', 'Humidity', 'Illumination', 'Soil Moisture']


    return (
        <CardGroup className='d-flex p-4 gap-4'>

            {titles.map((title, index) =>
                <Card key={index} className={Style.card}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            )}
        </CardGroup>
    )
}

export default StatusCard