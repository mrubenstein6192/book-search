import axios from "axios";
const BASEURL = "";

export default {

    searchBooks: function () {

    },


    handleResponse: function (response) {
        return axios.get("/api/books/" + id);
    }


};