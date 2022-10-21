const express = require('express');
const axios = require('axios');
const mangas = require('./mangas/index');
const cors = require('cors');

const app = express();

app.use(cors());

const getGames = () => {
    try {
      return axios.get('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=4D8B26C3B5AC4EA3CB50451092A9B77E&steamid=76561198271281098&skip_unvetted_apps=0&include_appinfo=1')
    } catch (error) {
      console.error(error)
    }
  }

app.get('/', (request, response)=>{
    return response.json({
        running: "is running!!"
    })
})

app.get('/mangas', (request, response)=>{
  return response.json(mangas)
})

app.get('/steam', (req, res) => {
    const games = getGames()
      .then(response => {
        return res.json(response.data)
      })
      .catch(error => {
        console.log(error)
      })
})

app.listen(process.env.PORT || 3333, ()=>console.log("API running"));