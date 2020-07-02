const express = require('express');
const app = express ();
const PORT = 4000;

let heroesArray = [{
    id : 1,
    name:'Captain America' 
  },
  {
    id : 2,
    name:'Iron Man'
  },
  {
    id : 3,
    name:'Black Widow'
  }
];

app.get('/',(req,res)=>{
    res.send("Avengers Assemble !")
})

app.get('/api/heroes',(req,res)=>{
     res.send(heroesArray);
});

app.get('/api/heroes/:heroId',(req,res)=>{
    let heroId = parseInt (req.params.heroId);
    let hero = heroesArray.find(h => h.id === heroId);

   if (!hero){
      return res.status(404).send("The given Id does not exist in this server")
   }

    res.send(hero);
});

app.post('/api/heroes',(req,res)=>{
    if (!hero){
       return res.status(404).send("Not all mandotory values have been set!");
    }

    let newHeroObj = {
        id:heroesArray.length + 1,
        name: req.body.heroName
    };
    heroesArray.push(newHeroObj);
    console,log(heroesArray);
    res.send(newHeroObj);
});

app.put('/api/heroes/:heroId',(req,res)=>{
    let heroId = parseInt (req.params.heroId);
    let hero = heroesArray.find(h => h.id === heroId);

    if (!hero){
        return res.status(404).send("The given Id does not exist in this server")
     }

     if(!req.body.heroName){
        return res.status(404).send("Not all mandotory values have been set!")
     }

    hero.name = req.body.heroName;
    console.log(heroesArray)
    res.send(hero);

});

app.delete('/api/heroes/:heroId',(req,res)=>{
    let heroId = parseInt (req.params.heroId);
    let hero = heroesArray.find(h => h.id === heroId);

    if (!hero){
        return res.status(404).send("The given Id does not exist in this server")
     }
 
    let indexOfHro = heroesArray.indexOf(hero); //find index

    heroesArray.splice(indexOfHro,1);

    res.send(hero);

});

app.listen(PORT,function(){
    console.log("Listening on port " + PORT)
});