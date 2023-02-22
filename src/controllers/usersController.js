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
  response.status(200).send({ message: 'Usuario Actualizado'})
}

// DELETE /users/1 - Eliminar Usuario dado su ID
export const deleteUser = (request, response) => {
  response.status(200).send({ message: 'Usuario Eliminado'})
}
