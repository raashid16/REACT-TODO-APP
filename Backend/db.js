const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/")
const TodoSchema = mongoose.Schema({
    tite: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', TodoSchema);

module.exports = {todo}