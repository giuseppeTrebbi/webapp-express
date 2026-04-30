import multer from "multer"



const storage = multer.diskStorage({
    destination: "public/covers",
    filename: (req, file, callbackFn) => {
        callbackFn(null, file.originalname)
    }
})
const upload = multer({ storage })



export default upload











