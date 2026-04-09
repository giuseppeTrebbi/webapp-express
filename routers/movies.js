import express from "express"
import moviesController from "../controllers/moviesController.js"



const moviesRouter = express.Router()
moviesRouter.get("/", moviesController.index)
moviesRouter.get("/:slug", moviesController.show)




export default moviesRouter




