const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const router = require('./routes/api-router')

const PORT = process.env.PORT || 3000

const app = express();

app.use(bodyParser.json())
app.use('/api', router);


const db = 'mongodb+srv://user:user@cluster0.j0dex.mongodb.net/blog';

async function start() {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()