const express = require('express');
const Cases = require('../../model/cases/cases.model')

const app = express();
 
app.get('/problems', async(req, res) =>{
    try{
        const cases = await Cases.find();
        res.json(cases);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

module.exports = app;