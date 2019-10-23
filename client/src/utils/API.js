import axios from "axios";

export default {
    // Gets all books using our search value
    searchGoogleBooks: function (query) {
        return axios.get("/api/books/" + query);
    },


};