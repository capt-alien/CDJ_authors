let Author = require('mongoose').model('Author');
let errorHandler = require('./helpers/error-Handler');



module.exports = {
    index(req, res){
        Author.find(req.body)
        .then(authors=>res.json(authors)) //spits out json
        .catch(errorHandler.bind(res));
    },
    // CREATE
    create(req,res){
        Author.create(req.body)
        .then(author => res.json(author))
        .catch(errorHandler.bind(res));
    },
    // SHOW
    show(req,res){
        Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(errorHandler.bind(res));
    },
    // update
    update(req, res) {
      Author.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(author => res.json(author))
        .catch(errorHandler.bind(res));
    },
    // DESTROY
    destroy(req,res){
        Author.findOneAndDelete({_id:req.params.id})
        .then(result => res.json(result))
        .catch(errorHandler.bind(res));
    }
};
