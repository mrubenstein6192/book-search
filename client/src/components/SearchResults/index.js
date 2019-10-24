import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';


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
                <Col>
                    {/* I want to map through my array results by sending props... */}
                    <div className="search-results">
                        <h1>{this.props.title}</h1>
                        {/* <p>{this.props.authors}</p> */}

                        {/*      handleResponse: function (response) {
         for (let i = 0; i < response.items.length; i++) {
             in production code, item.text should have the HTML entities escaped??
             document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title; */}

                        {/* Ok, I can do an event click here to save my books to the database
        Or I could send the book to my Search Page component and save it there...
        But my Search Page component just needs to grab the data that was saved to our DB */}
                        <Button onClick={(book) => this.onCardClick(book)}>Save this book.</Button>
                    </div>
                </Col>
            </Row>
        );
    }
}


export default SearchResults;