const db = require("../models");


//user can save books they searched for with the Google API
//the saved books render on the Saved page
//user can also delete a book from the database


module.exports = {

    findAll: (req, res) => {
        db.Book
            .find(req.query)
            .sort({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    deleteBook: (req,res) => {
        db.Book
        .deleteOne({
            _id: req.params.id,
        })
        .then((dbPost) => {

        })
    }














}