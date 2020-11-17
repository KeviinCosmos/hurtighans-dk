import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Post = () => (
    <Card >
        <Card.Img variant="top" src="https://cosmosco.dk/wp-content/uploads/2020/03/keviin-cosmos-isoleret.png.webp" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>
)

export default Post;