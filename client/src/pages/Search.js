import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
    state = {
        title: "",
        author: "",
    };

    // componentDidMount() {
    //     this.loadBooks();
    // }

    // loadBooks = () => {
    //     API.getBooks()
    //         .then(res =>
    //             this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //         )
    //         .catch(err => console.log(err));
    // };


    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //         API.saveBook({
    //             title: this.state.title,
    //             author: this.state.author,
    //             synopsis: this.state.synopsis
    //         })
    //             .then(res => this.loadBooks())
    //             .catch(err => console.log(err));
    //     }
    // };

    render() {
        return (

            <div>


                <h1>What Books Do You Want to Search For?</h1>


                {/* <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Title"
                        />
                        <Input
                            value={this.state.author}
                            onChange={this.handleInputChange}
                            name="author"
                            placeholder="Author"
                        />
                        <FormBtn
                            disabled={!(this.state.author && this.state.title)}
                            onClick={this.handleFormSubmit}
                        >
                            Submit Book
              </FormBtn> */}


            </div>


        );
    }
}

export default Search;