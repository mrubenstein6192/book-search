import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: [],
        books: [],
        title: "",
        author: "",
    };


    //handles our form on click below where uses input their search query
    handleFormSubmit = event => {
        event.preventDefault();

        //uses our utils/API google function through axios to call the API, then sets it to our results state
        API.searchGoogleBooks(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));


    };



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
                            <Button onClick={this.handleFormSubmit}>Submit</Button>
                        </Form>
                    </Col>
                </Row>



            </Container>




        );
    }
}

export default Search;