const db = require("../models");


module.exports = {

    findAll: (req, res) => {
        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    deleteBook: (req, res) => {
        db.Book
            .findById({
                _id: req.params.id,
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    saveBook: (req, res) => {
        console.log(req.body);

        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}