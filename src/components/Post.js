import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Post = (props) => (
    <Card >
        <Card.Img variant="top" src="https://cosmosco.dk/wp-content/uploads/2020/03/keviin-cosmos-isoleret.png.webp" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.excerpt}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>
)

export default Post;