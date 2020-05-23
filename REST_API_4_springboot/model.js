const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  emailId: {
    type: String
  },
  active: {
    type: Boolean
  }
})

// Export Contact model
const Todo = module.exports = mongoose.model('Todo', todoSchema);

module.exports.get = (callback, limit) => {
  Todo.find(callback).limit(limit);
}
