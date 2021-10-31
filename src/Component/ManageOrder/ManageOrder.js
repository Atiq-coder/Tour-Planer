import { Button, Card } from 'react-bootstrap';

const ManageOrder = (props) => {
    const { _id, title, text, price } = props.service;

    // Handle Delete
    const handleDelete = id => {
        const url = `https://eerie-demon-25137.herokuapp.com/destinations/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');

                }
            })
    }
    return (
        <div>
            <Card className="bg-dark text-white" style={{ maxWidth: '30rem' }}>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <Button variant="secondary" className="me-4">Approve</Button>
                    <Button onClick={() => handleDelete(_id)} variant="secondary">Delete</Button>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
};

export default ManageOrder;