import React, { Component } from "react";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import {
    Col, Row, Container,
    Jumbotron, CardGroup
} from 'reactstrap';
// import { Link } from "react-router-dom";


class SavedBooks extends Component {
    state = {
        books: [],
        deleteBook: [],
        arrayCounter: 0
    };

    componentDidMount() {
        this.loadBooks();
    }

    componentDidUpdate() {
        // console.log("Current updated state", this.state.books);
        this.loadBooks();
    }


    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };


    deleteBook = (index) => {
        console.log(index);

        let newBooks = this.state.books.splice(index, 1);

        // console.log(newBooks);

    }

 


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <Container fluid>
                                <center>
                                    <h1 className="display-3">Book Lovers welcomed here.</h1>
                                    <br></br>

                                    <p className="lead">Ever wish you had your own personal butler for books? </p>

                                    <p className="lead">With Bookmarker Pro you can search for your favorite books, and even save them for later.
                                We take reading seriously.</p>
                                </center>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h1>Saved Books</h1>


                        <CardGroup>
                            {this.state.books.map((books, index) =>

                                // this.setState({ arrayCounter: this.state.arrayCounter += })

                                < SearchResults
                                    key={books._id}
                                    title={books.title}
                                    authors={books.authors[0]}
                                    description={books.description}
                                    info={books.link}
                                    id={books._id}
                                    index={index}
                                    image={books.image ? books.image : ""}
                                    onClickSave={(image, title, authors, description, info) => this.onClickSave(image, title, authors, description, info)}
                                    onClickDelete={(booksId, index) => this.onClickDelete(booksId, index)}
                                />

                            )}
                        </CardGroup>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default SavedBooks;