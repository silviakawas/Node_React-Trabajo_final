const mongoose = require('mongoose');

const TaskScheme = mongoose.Schema({
    _id: String,
    title: String,
    date: String,
    note: String
});

const TaskModel = mongoose.model('task', TaskScheme);

module.exports = TaskModel;