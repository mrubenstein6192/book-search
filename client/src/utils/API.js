import axios from "axios";
// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const GoogleKey = "&key=" + process.env.REACT_APP_GOOGLE_API_KEY + '"';

//export an object containing methods for calling our Google API

export default {

    searchGoogleBooks: function (query) {
        // console.log(GoogleKey);

        console.log("Query search sent from front end form", query);

        

        return axios.get("https://dog.ceo/api/breed/" + query + "/images");
    }

};