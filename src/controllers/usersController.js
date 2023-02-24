import User from '../models/User'

// GET /users - Index o Listar todos los Usuarios
export const indexUsers = async (request, response) => {
  try {
    const users = await User.find({})

    response.status(200).send(users)
  } catch(error) {
    console.error(error)
  }
}

// POST /users - Crear Nuevo Usuario
export const createUser = async (request, response) => {
  try {
    // obtenemos los datos de la solicitud
    const { name, email, password } = request.body
    // preparamos los datos que vienen del cliente en nuestro modelo
    const newUser = new User({
      name,
      email,
      password
    })
    // salvamos en nuestra base de datos
    await newUser.save()
    // enviamos la respuesta al cliente
    response.status(201).send(newUser)

  } catch(error) {
    console.error(error)
  }
}

// GET /users/1 - Leer datos de Usuario dado su ID
export const readUser = (request, response) => {
  const { id } = request.params
}

// PATCH /users/1 - Actualizar Usuario dado su ID
export const updateUser = (request, response) => {
  const { id } = request.params
  /// una vez que tenga el usuario, actualizar los datos que se envian desde cliente
  // request.body

  /// luego que lo actualizaron, enviar una respuesta
}

// DELETE /users/1 - Eliminar Usuario dado su ID
export const deleteUser = (request, response) => {
  // buscar el registro de usuario del array users, dado un id que viene en la url
  const { id } = request.params

}
