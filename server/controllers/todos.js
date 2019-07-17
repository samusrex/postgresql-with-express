const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;
const Sequelize = require('sequelize')

module.exports = {
  create(req, res) {
    
    return Todo
      .create({
        title: req.body.title,
        description: req.body.description
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Todo
    .findAll(
      /*{
        attributes: ['id','title']
      }
      , */
      {
      include: [
      {
        model: TodoItem,
      }
      ]
      }
      )
    
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },

};