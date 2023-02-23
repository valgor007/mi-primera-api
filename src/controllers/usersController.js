const users = [
  {
    id: 1,
    uuid: "UTR0001",
    name: "Alison",
    email: "alison@mail.com",
    createdAt: "2023-01-01"
  },
  {
    id: 2,
    name: "Paola",
    uuid: "UTR0002",
    email: "paola@mail.com",
    createdAt: "2023-01-01"
  },
  {
    id: 3,
    name: "Rafa",
    uuid: "UTR0003",
    email: "rafa@mail.com",
    createdAt: "2023-01-01"
  }
]

// GET /users - Index o Listar Usuarios
export const indexUsers = (request, response) => {
  response.status(200).send(users)
}

// POST /users - Crear Nuevo Usuario
export const createUser = (request, response) => {
  const { name, email } = request.body
  const newUser = {id: users.length + 1, name, email};
  users.push(newUser);

  response.status(201).json(newUser);
}

// GET /users/1 - Leer datos de Usuario dado su ID
export const readUser = (request, response) => {
  const { id } = request.params

  const user = users.find((user) => user.id == id )

  if (!user) {
    response.status(404).send({ message: 'Usuario no encontrado!'})
  }

  response.status(200).send(user)
}

// PUT/PATCH /users/1 - Actualizar Usuario dado su ID
export const updateUser = (request, response) => {
  const { id } = request.params
  const { name, email, password } = request.body
  const findUser = users.find((user) => user.id == id)
  console.log(findUser)
  /// una vez que tenga el usuario, actualizar los datos que se envian desde cliente
  // request.body
  const updatedUser = { 
    ...findUser, 
    name,
    email,
    password
  }
  /// luego que lo actualizaron, enviar una respuesta
  response.status(200).send(updatedUser)
}

// DELETE /users/1 - Eliminar Usuario dado su ID
export const deleteUser = (request, response) => {
  // buscar el registro de usuario del array users, dado un id que viene en la url
  const { id } = request.params
  const userIndex = users.findIndex(user => user.id == id)
  // eliminarlo del array usando slice() y posterior indicar que el mismo fue eliminado
  users.splice(userIndex, 1)
  response.status(200).send(users)
}
