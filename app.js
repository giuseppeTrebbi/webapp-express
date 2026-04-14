import express from "express"
import moviesRouter from "./routers/movies.js"
import cors from "cors"



const app = express()
const port = "3000"


app.use(cors( { origin: '*' } ))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/movies", moviesRouter)



app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})


