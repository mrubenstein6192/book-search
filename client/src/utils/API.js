import axios from "axios";

export default {

    searchBooks: function () {

    },


    handleResponse: function (response) {
        return axios.get("/api/books/" + id);
    }


};