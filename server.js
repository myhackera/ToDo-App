const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./Routes/TodoRoutes');
const cors = require('cors');
const bodyParser = require('body-parser')



dotenv.config();

const app = express();
const PORT = process.env.port || 5000

app.use(bodyParser.json())
app.use(router);
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{ console.log("Mongodb is connected"); })
        .catch((err)=>{ console.log(err); })

app.listen(PORT, ()=>{
    console.log(`port is listening on ${PORT}`);
})

