import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const GoogleKey = "&key=" + process.env.googleBooksKey;

export default {

    searchGoogleBooks: function (query) {
        return axios.get(BASEURL + query + GoogleKey);
    }

};