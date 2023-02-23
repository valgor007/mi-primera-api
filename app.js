import express from 'express'

import usersRouter from './src/routes/usersRouter'

const app = express()

app.use(express.json())

app.use(usersRouter)

app.get('/', (request, response) => {
  response
    .status(200)
    .send({ 
      message: 'Bienvenidos a la API RESTful de la Generacion 23a' 
    })
})

//=== SERVIDOR ====//
app.listen(3000, () => {
  console.log('servidor ejecutando en el puerto 3000')
})
