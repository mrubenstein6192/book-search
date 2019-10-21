import React, { Component } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

class Search extends Component {
    state = {
        title: "",
        author: "",
    };

    // componentDidMount() {
    //     this.loadBooks();
    // }

    // loadBooks = (query) => {
    //     API.searchGoogleBooks(query)
    //         .then(res =>
                // console.log(query);
    //             this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //         )
    //         .catch(err => console.log(err));
    // };



    render() {
        return (
            <Container>
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

                    <Col sm="12" md={{ size: 7, offset: 2 }}>
                        <Form>
                            <FormGroup>
                                <Label for="userSearch">Search all the books.</Label>
                                <Input type="input" name="search" id="bookSearch" placeholder="Search for a book. Ex. 'Harry Potter'" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>


                
            </Container>




        );
    }
}

export default Search;