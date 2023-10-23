const express = require("express");
const News = require("../model/news.model");

const app = express();

app.get("/news_features", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post('/news_features', async(req, res) =>{
  try{
    const { title, datePublished, description, link } = req.body;
    if(!title || !datePublished || !description || !link){

      return res.status(400).json({ message: "Please provide all required fields"});

    }

    const addNewsFeatures = new News({
      title,
      datePublished,
      description,
      link
    });

    await addNewsFeatures.save();

    res.status(201).json(addNewsFeatures);
  }catch(err){
    console.error(err);
    res.status(500).json({ message: "Internal server error"});
  }
})

// Update an item
app.put('/news_features/:id', (req, res)=>{
  const newsItemId = req.params.id;
  const updatedNewsData = req.body;

  News.findByIdAndUpdate(newsItemId, updatedNewsData, { new: true})
  .exec()
  .then((updatedNews) =>{
    res.json(updatedNews);
  })
  .catch((err) =>{
    console.error(err);
    res.status(500).send('Error updating news item');
  })
})

app.delete('/news_features/:id', (req, res)=>{
  const newsItemId = req.params.id;

  News.findByIdAndDelete(newsItemId)
  .exec()
  .then((deletedNews) =>{
    res.json(deletedNews);
  })
  .catch((err) =>{
    console.error(err);
    res.status(500).send('Error deleting news item');
  })
})

module.exports = app;