

module.exports = {

    searchBooks: function (query) {
      
        console.log("Query search sent from front end form", query);
        console.log("Our API Key maybe", process.env.REACT_APP_GOOGLE_BOOKS_API_KEY);

        let thisSearch = "https://www.googleapis.com/books/v1/volumes?q=" + query + "+inauthor:keyes&key="
            + '"' + process.env.REACT_APP_GOOGLE_BOOKS_API_KEY + '"';

        console.log("This is our search link", thisSearch);

        return axios.get(thisSearch);

    }

};

