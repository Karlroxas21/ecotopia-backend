const express = require('express');
const News = require('../model/news.model');

const app = express();

app.get('/overviewOfClimateChange', async(req, res) =>{
    try{
        const news = await News.find();
        res.json(news);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

module.exports = app;