
const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const Recipe = require('./models/recipe'); 


mongoose.connect('mongodb+srv://francotechk:e1sDam8Sons3fChB@cluster0-2lnoh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log("database failed");
    console.log(err)
  })

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//this fetches all recipes
app.get('/api/recipes', (req, res) => {

Recipe.find().then((recipes) => res.status(201).json(recipes))
  .catch((error)=>res.status(400).json({error}))
})

// this route helps us add a new recipe 
app.post('/api/recipes', (req, res) => {

  console.log(req.body)
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time,
  })
  
  recipe.save().then(() => {
    res.status(201).json({ message: 'Successfully created' });
    console.log(req.body)
  })
  .catch((error)=>res.status(400).json({error}))
})


//this fetches ONE things
app.get('/api/recipes/:id', (req, res) => {
  
  Recipe.findOne({_id: req.params.id}).then((recipes) => res.status(201).json(recipes))
    .catch((error)=>res.status(404).json({error}))
  }
  )

  //this edits one recipe
  app.put('/api/recipes/:id', (req, res) => {
  
    const recipe = new Recipe({
      _id: req.params.id,
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      difficulty: req.body.difficulty,
      time: req.body.time,
    })
    
    
    //this fetches ONE recipe
      Recipe.updateOne({_id: req.params.id}, recipe).then((recipes) => res.status(201).json({message: "Updated Successfully"}))
      .catch(error =>res.status(404).json({error}))
    })
  
//this deletes ONE recipe
    app.delete('/api/recipes/:id', (req, res)=>{
      Recipe.deleteOne({_id: req.params.id}).then(()=>res.status(200).json({message: "Deleted Successfully"}))
      .catch(error=>res.status(404).json(error))
    })
  



module.exports = app


