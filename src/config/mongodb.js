import mongoose from 'mongoose'

const DB_NAME = 'BlogApp'
const uri = `mongodb+srv://raf4q0:W3lc0m3-KDM1@kodemiadb.k9jabaq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

export const mongoDbConnection = async () => {
  try {
    await mongoose.set('strictQuery', false).connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Conexion con mongo atlas existosa')
  } catch(error) {
    console.error('Ocurrio un error cuando intento conectarse a mongo Atlas', error)
    process.exit(1)
  }
}
