import Card from 'react-bootstrap/Card';

export default function CardTitle({ title }) {
    return (
        <Card>
            <Card.Body style={{ textAlign: "center" }}>{title}</Card.Body>
        </Card>
    )
}
