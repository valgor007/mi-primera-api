// GET /users - Index o Listar Usuarios
export const indexUsers = (request, response) => {
}

// POST /users - Crear Nuevo Usuario
export const createUser = (request, response) => {
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
