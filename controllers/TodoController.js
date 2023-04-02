const todoModel = require('../models/TodoModels');

module.exports.getTodo = async (req, res)=>{
    const toDo = await todoModel.find()
    res.send(toDo)
}

module.exports.saveTodo = async (req, res)=>{
    const {text} = req.body;
    todoModel
        .create({text})
        .then((data)=>{
            console.log('Added Successfully...')
            console.log(data)
            res.send(data)
        })
}

module.exports.updateToDo = async (req, res)=>{
    const {_id, text} = req.body;
    todoModel
        .findByIdAndUpdate(_id, {text})
        .then(()=> res.send("Update Successfully..."))
        .catch((err)=> console.log(err));
}

module.exports.deleteToDo = async (req, res)=>{
    const {_id, text} = req.body;
    todoModel
        .findByIdAndDelete(_id)
        .then(()=> res.send("Deleted Successfully..."))
        .catch((err)=> console.log(err));
}

