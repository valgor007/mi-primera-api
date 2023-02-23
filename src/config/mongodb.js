import { MongoClient } from 'mongodb'


const uri = "mongodb+srv://raf4q0:W3lc0m3-KDM1@kodemiadb.k9jabaq.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db

export const mongoDbConnection = async () => {
  try {
    await client.connect()
    db = client.db()

    console.log('Conexion con mongo atlas existosa')
  } catch(error) {
    console.error('Ocurrio un error cuando intento conectarse a mongo Atlas', error)

    // este codigo cierra nuestra aplicacion forzada
    process.exit(1)
  }
}

export const mongoDbInstance = () => {
  return db
}
