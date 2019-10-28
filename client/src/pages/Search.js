import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import SearchResults from "../components/SearchResults";
import { Container, Row, Col, CardGroup } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        results: [],
        title: "",
        author: "",
    };




    // handle our input change for search on our form below
    handleChange = event => {
        this.setState({ search: event.target.value });
    }


    //handles our form on click below where uses input their search query
    handleFormSubmit = event => {
        event.preventDefault();

        //uses our utils/API google function through axios to call the API, then sets it to our results state
        API.searchGoogleBooks(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                console.log("Our result", res.data.items);

                this.setState({ results: res.data.items, error: "" });

                console.log("Our current search state", this.state.search);
                console.log("Our current Google API resultes", this.state.results);
                console.log(`Testing result${this.state.results[0].volumeInfo.imageLinks.thumbnail}`)
            })
            .catch(err => this.setState({ error: err.message }));
    };




    render() {
        return (
            <Container fluid>
                <Row>
                    <Col >
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
                        <Form>
                            <FormGroup>
                                <Label for="userSearch">Search all the books.</Label>
                                <Input type="input" name="search" id="bookSearch"
                                    onChange={this.handleChange}
                                    placeholder="Search for a book. Ex. 'Harry Potter'" />
                            </FormGroup>
                            <Button onClick={this.handleFormSubmit}>Submit</Button>
                            <p></p>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardGroup>
                            {/* map through our Google Books APi call results (in state) */}
                            {this.state.results.map(results =>
                                // This def works and shows book titles

                                // <h1>{results}</h1>
                                <SearchResults
                                    key={results.id}
                                    title={results.volumeInfo.title}
                                    authors={results.volumeInfo.authors[0]}
                                    description={results.volumeInfo.description}
                                    info={results.volumeInfo.infoLink}
                                    image={results.volumeInfo.imageLinks ? results.volumeInfo.imageLinks.thumbnail : ""}
                                    onClickSave={(image, title, authors, description, id, info) => this.onClickSave(image, title, authors, description, id, info)}
                                    onClickDelete ={(book) => this.onClickDelete(book)}
                                />

                            )}
                        </CardGroup>
                    </Col>
                </Row>
            </Container>




        );
    }
}

export default Search;