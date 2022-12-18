import express from "express"
import { connectMongoDb } from "./src/config/database.js"
const app = express()
const port = process.env.PORT || 3000

app.get('*', (req, res) => res.status(404).json({ error: "Not found" })) //msg de error 404 para rutas no definidas

connectMongoDb()
app.listen(port, () => console.log(`App working on port ${port}!`))