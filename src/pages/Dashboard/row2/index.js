import Style from './style.module.scss'
import { CardGroup, Card } from 'react-bootstrap'

function InfoGroup() {
    //{`container top-3 ${isActive ? "shadow": ""}`}
    //d-flex p-4 gap-4
    return (
        <CardGroup className={`d-flex p-4 gap-4 ${Style['card-group']}`}>
            <Card className={Style.card1}>
                <Card.Body>
                    <Card.Title>Đồ thị</Card.Title>
                </Card.Body>
            </Card>
            <Card className={Style.card2}>
                <Card.Body>
                    <Card.Title>About cây</Card.Title>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default InfoGroup