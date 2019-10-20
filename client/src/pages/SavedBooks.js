import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class SavedBooks extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        description: ""
    };

    // componentDidMount() {
    //     this.loadBooks();
    // }

    // loadBooks = () => {
    //     API.getBooks()
    //         .then(res =>
    //             this.setState({ books: res.data, title: "", author: "", description: "" })
    //         )
    //         .catch(err => console.log(err));
    // };





    render() {
        return (
            <div>
             
                 
                            <h1>Saved Books</h1>
                      

                
                 </div>
        );
    }
}

export default SavedBooks;