const express = require('express');
const graphqlHTTP =require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv  = require('dotenv').config({ path: ".env" });
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URL,{ useCreateIndex: true, useNewUrlParser: true, useFindAndModify: true });
mongoose.connection.once('open',() =>{
    console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log('now listening for requests on port 4000');
});