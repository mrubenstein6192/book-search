const axios = require("axios");

module.exports = {

    searchBooks: function (req, res) {
        const query = req.params.query;

        console.log("Query search sent from front end form", query);
        console.log("Our API Key maybe", process.env.GOOGLE_BOOKS_API_KEY);

        let thisSearch = "https://www.googleapis.com/books/v1/volumes?q=" + query + "+inauthor:keyes&key="
            + process.env.GOOGLE_BOOKS_API_KEY;

        console.log("This is our search link", thisSearch);

        return axios.get(thisSearch).then((googleResponse) => {
            res.send(googleResponse.data);
        }).catch((err) => {
            console.error(err.message);
            res.status(500).send("Error loading Google response");
        });

    }

};

