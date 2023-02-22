import express from 'express'

import usersRouter from './src/routes/usersRouter'

const app = express()

app.use(express.json())

app.use(usersRouter)


const posts = [
  {
    id: 1,
    title: "Como hice mi primera API",
    user_id: 2,
    createdAt: "2023-02-20"
  },
  {
    id: 2,
    title: "Diferencia entre map y find",
    user_id: 1,
    createdAt: "2023-01-10"
  },
  {
    id: 3,
    title: "Que es RESTful API",
    user_id: 2,
    createdAt: "2023-01-18"
  }
]

app.get('/', (request, response) => {
  response
    .status(200)
    .send({ 
      message: 'Bienvenidos a la API RESTful de la Generacion 23a' 
    })
})


app.get('/posts/:id/likes', (request, response) => {
  response.status(200).send([])
})

// ===== POSTS ====== //
app.get('/posts', (request, response) => {
  response.status(200).send(posts)
})

app.get('/posts/:id', (request, response) => {
  const { id } = request.params

  const post = posts.find((post) => post.id == id)

  if (!post) {
    response.status(404).send({ message: 'Post no encontrado'})
  }

  response.status(200).send(post)
})

app.get('/users/:userId/posts/likes', (request, response) => {
  
})


//=== SERVIDOR ====//
app.listen(3000, () => {
  console.log('servidor ejecutando en el puerto 3000')
})
