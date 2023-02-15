    const cors = require('cors')
    const express = require('express');
    require('./config')
    const todo = require('./schema');
    const count = require('./counterSchema')


    const app = express()
    app.use(express.json());
    app.use(cors())

    app.get('/', async (req, res) => {
        let data = await todo.todo.find({},{_id:0,title:1,id:1,description:1,enddate:1,status:1,startdate:1});
        res.send(data);
    })
    app.post('/add', async (req, res) => {
        let countValue = await count.findOne();
        req.body.id = countValue.count;
        let result = await todo.todo.create(req.body);
        let counter = await count.updateOne({ todoCounterModel: 1 }, { $inc: { count: 1 } });
        console.log("aaaaaaa" ,req.body.id);
        console.log("asa", counter);
        res.send(result);
    })
    app.put('/update/:id', async (req, res) => {
        let data = await todo.todo.updateMany(req.params, { $set: req.body })
        res.send(data)
    })
    app.delete('/delete/:id', async (req, res) => {
        let data = await todo.todo.deleteMany(req.params)
        res.send(data);
       
    })
    app.get('/:id',async (req,res)=>{
        let data = await todo.todo.find(req.params)
        res.send(data)
    })

    app.listen(8081)