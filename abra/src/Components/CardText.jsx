import Card from 'react-bootstrap/Card';

export default function CardText({ text }) {
    return (
        <Card style={{ width: 300, justifyContent: "center", margin: 5 }}>
            <Card.Body style={{ textAlign: "center" }}>{text}</Card.Body>
        </Card>
    )
}
