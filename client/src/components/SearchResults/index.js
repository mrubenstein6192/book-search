import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import {
    CardDeck, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';


class SearchResults extends Component {
    state = {
        books: []
    }



    onClick = card => {
        let currentBook = card;
        alert('Current book clicked' + currentBook);
    }


    render() {
        return (

            <Row>
                <Col sm="5" offset="-5">
                    {/* I want to map through my array results by sending props... */}

                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{this.props.title}</CardTitle>
                                <CardSubtitle>{this.props.authors}</CardSubtitle>
                                <CardText>{this.props.description}
                                
                                    <p><a target="_blank" rel="noopener noreferrer" href={this.props.info} >More Book Detail</a></p>
                                </CardText>



                                <Button onClick={(book) => this.onCardClick(book)}>Save this book.</Button>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        );
    }
}


export default SearchResults;