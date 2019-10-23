import React, { Component } from "react";
// import { Link } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: [],
        savedBooks: [],
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
                console.log("Our result", res.data);
                this.setState({ results: res.data.items, error: "" });

                console.log("Our current search state", this.state.search);
                console.log("Our current Google API resultes", this.state.results);
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
                                <Input type="input" name="search" id="bookSearch"
                                    onChange={this.handleChange}
                                    placeholder="Search for a book. Ex. 'Harry Potter'" />
                            </FormGroup>
                            <Button onClick={this.handleFormSubmit}>Submit</Button>
                        </Form>
                    </Col>
                </Row>

                {/* map through our Google Books APi call results (in state) */}
                {this.state.results.map(results =>
                    <SearchResults
                        key={results.volumeInfo.title}
                        //but how do we send to an H tag, it doesn't auto close? 
                        h1={results.volumeInfo.title}
                    />

                )}
            </Container>




        );
    }
}

export default Search;