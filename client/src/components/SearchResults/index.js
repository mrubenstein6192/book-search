import React, { Component } from "react";
// import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import {
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import API from "../../utils/API";


class SearchResults extends Component {

    state = {
       deleteBook: 0
    };

   

    onClickSave = (image, title, authors, description, info) => {
        //Whyyyy do I get a console log but undefined when outside that?? I'm 
        console.log("Grabbed from onClick: ", image, title, authors, description, info);

        API.saveBook({
            image: image,
            title: title,
            authors: authors,
            description: description,
            link: info
        })
            .then(res => this.props.loadBooks())
            .catch(err => console.log(err));

    };

   // Ok, I can get the id fine from our book, how do I send this to my main component?

    onClickDelete = (id, index) => {
        console.log('Delete book id:', id,  'and index:', index);

        API.deleteBook(id)
      .then(res => this.props.loadBooks())
      .catch(err => console.log(err));

    };





    render() {
        return (

            <div className="card">
                {/* I want to map through my array results by sending props... */}
                {/* Do a ternary for buttons ?? */}
                <Button onClick={(e) => this.onClickSave(this.props.image,
                    this.props.title, this.props.authors,
                    this.props.description, this.props.info)}>Save this book.</Button>
                  <p></p>
                 <Button onClick={(e) => this.onClickDelete(this.props.id, this.props.index)}>Delete Book</Button>
                <p></p>
                <CardImg top src={this.props.image} id={this.props.id} alt="Card image cap" />
                <CardBody>
                    <CardTitle><h5>{this.props.title}</h5></CardTitle>
                    <CardSubtitle><i>Author: {this.props.authors}</i></CardSubtitle>
                    <hr />
                    <CardText><small className="text-muted"> {this.props.description}</small></CardText>
                    <CardText>
                        <small className="text-muted">
                            <a target="_blank" rel="noopener noreferrer" href={this.props.info} >More Book Detail</a></small>
                    </CardText>

                </CardBody>

            </div>
        );
    }
}


export default SearchResults;