const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const plants = {
    'garry oak': {
        'speciesName' : 'Garry Oak',
        'habitat': 'Rocky',
        'height' : 2
    }, 
      
    'invasive': {
        'speciesName' : 'Invasive',
        'habitat': 'disturbed',
        'height' : 1, 
        
      
    },

    'camus': {
        'speciesName': 'Common Camus',
        'habitat': 'Meadow',
        'height': 2,
        'plantImage': 'https://www.gardeningknowhow.com/wp-content/uploads/2013/09/Camassia-quamash.jpg',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:plantName', (request, response) => {
    const speciesName = request.params.plantName.toLowerCase()
    if(plants[speciesName]){
        response.json(plants[speciesName])
    } else {
        response.json(plants ['invasive'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})
