let authors = require('./../controllers/authors');


module.exports = function(app){
    // get one
    app.get('/authors/', authors.index)
    // post
    app.post('/authors/', authors.create)
    // get one
    app.get('/authors/:id', authors.show)
    // update
    app.put('/authors/:id', authors.update)
    // delete
    app.delete('/authors/:id', authors.destroy)

}
