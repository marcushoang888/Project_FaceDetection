
import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'Sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        },
    ]
}

const saltRounds = 10;
//  GET  /

app.get('/', (req,res) => {
    res.send('This is working')
})

//  POST /Sign In
app.post('/signin', (req,res)=> {
    res.json(req.body)
})

//  POST /Sign In
app.post('/signup', (req,res)=> {
    const planPassword = req.body.password
    bcrypt.hash(planPassword, saltRounds, function(err, hash) {
        res.json({
            password: hash
        });
    });
})
/*
    / -> res = this is working
    /signin -> POST success/fail 
    /signup -> POST user
    /profile/:userId  -> GET =user
    /image  -> PUT -> user

*/