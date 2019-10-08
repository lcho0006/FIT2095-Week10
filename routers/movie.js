var Actor = require('../models/actor');
var Movie = require('../models/movie');
const mongoose = require('mongoose');
module.exports = {
    getAll: function (req, res) {
        Movie.find({}).populate("actors").exec(function (err, actor) {
            if (err) return res.json(err);
            if (!actor) return res.json();
            res.json(actor);
        });
    },
    createOne: function (req, res) {
        let newMovieDetails = req.body;
        newMovieDetails._id = new mongoose.Types.ObjectId();
        Movie.create(newMovieDetails, function (err, movie) {
            if (err) return res.status(400).json(err);
            res.json(movie);
        });
    },
    getOne: function (req, res) {
        Movie.findOne({ _id: req.params.id })
            .populate('actors')
            .exec(function (err, movie) {
                if (err) return res.status(400).json(err);
                if (!movie) return res.status(404).json();
                res.json(movie);
            });
    },
    updateOne: function (req, res) {
        Movie.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            res.json(movie);
        });
    },
    deleteOne: function (req, res) {
        Movie.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
    addActor: function(req, res){
        Movie.findOne({ _id: req.params.id }, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            Actor.findOne({ _id: req.body.id }, function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                movie.actors.push(actor._id);
                movie.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(movie);
                });
            })
        });
    },
    deleteOneActor: function(req, res) {
        Movie.findOne({ _id: req.params.id }, function (err, movie){
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            let actorArray = movie.actors;
            for(let i=0 ; i < actorArray.length ; i++) {
                if (String(ObjectId(req.params.actorid)) == String(actorArray[i])) {
                    actorArray.splice(i, 1);
                }
            }
            movie.actors = actorArray;
            movie.save(function (err) {
                if (err) return res.status(500).json(err);
                res.json(movie);
            });
        });
    },
    getMovieYear: function(req, res) {
        let year1 = Number(req.params.year1);
        let year2 = Number(req.params.year2);
        Movie.find({year: {$gt: year1, $lt: year2}}, function(err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            res.json(movie);
        })
    }
};