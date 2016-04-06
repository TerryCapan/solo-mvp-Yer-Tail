var mongoose = require('mongoose');
var Q = require('q');

var createTale = Q.nbind(Tale.create, Tale);
var findAllTales = Q.nbind(Tale.find, Tale);

var TaleSchema = new mongoose.Schema({
  tale: [],
  username: String
})

mongoose.model('Tale', TaleSchema);

module.exports = {
  addTale: function(req, res, next) {
    // createTale(req.body.data)
    //   .then(function (createdTale) {
    //     if (createdTale) {
    //       res.json(createdTale);
    //     }
    //   })
    //   .fail(function (error) {
    //     next(error);
    //   });
    console.log(req.body.data)
  },

  getTales: function (req, res, next) {
    findAllTales({})
      .then(function(tales) {
        res.json(tales);
      })
      .fail(function (error) {
      next(error);
    });
  }
};