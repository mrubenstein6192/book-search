import axios from "axios";

export default {
    // Gets all books using our search value
    searchGoogleBooks: function (query) {
        return axios.get("/api/google/" + query);
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    getBooks: function () {
        return axios.get("/api/books");
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
      },
    
};