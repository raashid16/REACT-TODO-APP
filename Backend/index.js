const express = require('express');
const { createTodo,updateTodo } = require('./types');
const { todo } = require('./db');
const app = express()
const port = 3000
const cors = require('cors');
app.use(express.json());


app.post("/todo",async function(req, res){
    const userBody = req.body;
    const parseBody = createTodo.safeParse(userBody);
    if(!parseBody.success){
        res.status(411).json({
            msg: " You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: userBody.title,
        description: userBody.description,
        completed: false
    })
    res.json({
        msg: " Todo Created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({})
    res.json({
        todos
    })

})

app.put("/completed",async function(req,res){
    const userBody = req.body
    const parseBody = createTodo.safeParse(userBody);
    if(!parseBody.success){
        res.status(411).json({
            msg: " You sent the wrong inputs"
        })
    }
    await todo.update({
        _id:req.body.id
    },{
        completed: true
    })
    res.json({
        msg:" Todo marked as completed"
    })
})

app.listen(port)