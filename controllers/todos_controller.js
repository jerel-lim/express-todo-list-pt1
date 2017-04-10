const Todo = require('../models/todo')
const express = require('express')
const router = express.Router()
// TODO. import express and create a Router, replace the methods below with routes e.g.
// router.post('/', function(req,res) => {
//  Todo.create(req.body, function (err, todo) {
//    res.json(todo)
//  }
// })

// router.get('/', function (req, res) {
//   res.render('homepage')
// })

router.get('/', function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) console.error(err)
    res.render('homepage', {newTodos: todos})
    // console.log(todos)
  })
})


router.post('/', function (req, res) {
  var newTodo = new Todo()
  newTodo.name = req.body.name
  newTodo.description = req.body.description
  newTodo.completed = false
  newTodo.save(function (err, savedEntry) {
    if (err) throw err
    res.redirect('/')
  })
})

////////////////////////////
router.delete('/:id', function (req, res) {
  console.log(req.body.id)
  // Todo.findOneAndRemove({ _id: req.body.id }, function (err) {
  //   if (err) {
  //     console.error(err)
  //   }
  // })
  // res.redirect('/')
})
///////////////////////////////////////////////////////////
//
router.get('/:id', function (req, res) {
  Todo.findById(req.params.id, (err, todoItem) => {
    if (err) throw err
    res.render('single-todo', { todoItem: todoItem })
  })
})
//


//
// function show (id) {
//   Todo.findById(id, function (err, todo) {
//     if (err) return console.log(err)
//     // console.log(todo)
//   })
// }
//
// function update (id, params) {
//   Todo.findOneAndUpdate({ _id: id }, params, function (err, todo) {
//     if (err) console.log(err)
//     // console.log(todo)
//   })
// }



module.exports = router
