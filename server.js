require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors')


const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);


app.get('/', (req, res) => {
    // throw new Error('fake error');
    res.send("HELLO NODE API")
})

app.get('/blog', (req, res) => {
    res.send("HELLO BLOG")
})

app.use(errorMiddleware);



mongoose.connect(MONGO_URL)
.then (() => {
    console.log('connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`Node API app is running on port ${PORT}`) 
    });
}).catch((error) => {
    console.log(error)
})