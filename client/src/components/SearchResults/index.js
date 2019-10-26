import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import {
    CardDeck, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
// import API from "../../utils/API";


class SearchResults extends Component {
    state = {
        clicked: [],
        image: "",
        title: "",
        authors: [],
        description: "",
        info: ""
    };



    onBookClick = (image, title, authors, description, info) => {
        //This gives us the current object that was clicked.
        console.log(image, title, authors, description, info);



        this.setState({ 
            image: image, 
            title: title, 
            authors: authors, 
            description: description,
            info: info
              });

        // this.saveBooks();

    };

    saveBooks = () => {
        
       



    };




    render() {
        return (

            <Row>
                <Col sm="5">
                    {/* I want to map through my array results by sending props... */}

                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{this.props.title}</CardTitle>
                                <CardSubtitle>By: {this.props.authors}</CardSubtitle>
                                <CardText> {this.props.description}
                                    -----
                                    {this.state.clicked}
                                    <p><a target="_blank" rel="noopener noreferrer" href={this.props.info} >More Book Detail</a></p>
                                </CardText>


                                {/* We can pass through an array, or an individual prop. Can't pass through the complete object for some reason? */}
                                <Button onClick={(e) => this.onBookClick(this.props.image, 
                                    this.props.title, this.props.authors,
                                    this.props.description, this.props.info)}>Save this book.</Button>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        );
    }
}


export default SearchResults;