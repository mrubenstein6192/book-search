import axios from "axios";
// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const GoogleKey = "&key=" + process.env.REACT_APP_GOOGLE_API_KEY + '"';


export default {

    searchGoogleBooks: function (query) {
        console.log(GoogleKey);

        // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBEKmCmy448Kd0lEL71aYyI5l3IJoHW124

        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "AIzaSyBEKmCmy448Kd0lEL71aYyI5l3IJoHW124");
    }

};