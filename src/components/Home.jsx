import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import NavBar from './Navbar.jsx';
import '../styles/Home.scss';

const Home = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "Card 1", description: "This is card 1" },
        { id: 2, title: "Card 2", description: "This is card 2" },
        { id: 3, title: "Card 3", description: "This is card 3" },
    ]);

    return (
        <div className="container-fluid ">
            <NavBar/>
            {cards.map((card) => (
                <Card className="col-3 mx-auto my-5" key={card.id}>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Home;
