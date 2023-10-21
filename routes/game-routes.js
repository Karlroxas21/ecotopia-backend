const express = require("express");
const GameScene1 = require("../model/game.scene1.model")
const GameScene2 = require("../model/game.scene2.model")
const GameScene3 = require("../model/game.scene3.model")
const GameScene4 = require("../model/game.scene4.model")
const GameScene5 = require("../model/game.scene5.model")

const app = express();

app.get("/game_scene1", async(req, res) =>{
        try{
                const game = await GameScene1.find();
                res.json(game);
        }catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server error"});
        }
});

app.get("/game_scene2", async(req, res) =>{
        try{
                const game = await GameScene2.find();
                res.json(game);
        }catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server error"});
        }
});

app.get("/game_scene3", async(req, res) =>{
        try{
                const game = await GameScene3.find();
                res.json(game);
        }catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server error"});
        }
});

app.get("/game_scene4", async(req, res) =>{
        try{
                const game = await GameScene4.find();
                res.json(game);
        }catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server error"});
        }
});

app.get("/game_scene5", async(req, res) =>{
        try{
                const game = await GameScene5.find();
                res.json(game);
        }catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server error"});
        }
});

module.exports = app;