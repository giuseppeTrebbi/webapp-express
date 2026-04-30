import express from "express"
import moviesController from "../controllers/moviesController.js"
import upload from "../middlewares/handleImages.js"



const moviesRouter = express.Router()
moviesRouter.get("/", moviesController.index)
moviesRouter.get("/:slug", moviesController.show)
moviesRouter.post("/:id/reviews", moviesController.storeReview)
moviesRouter.post("/", upload.single("image"), moviesController.storeMovie)



export default moviesRouter




