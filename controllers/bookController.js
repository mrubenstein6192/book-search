const db = require("../models");


module.exports = {

    findAll: (req, res) => {
        db.Books
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    deleteBook: (req, res) => {
        db.Books
            .findById({
                _id: req.params.id,
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    saveBook: (req, res) => {
        db.Books
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}