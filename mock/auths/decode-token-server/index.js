import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())

app.post("/token", (req, res) => {
    const authHeader = req.header("authorization")
    const accessToken = authHeader && authHeader.split(' ')[1]
    if (accessToken === null) {
        res.status(404).json({
            isSuccess: false,
            message: "invalid token"
        })
    }
    const userInfo = jwt.decode(accessToken)
    res.status(200).json({
        isSuccess: true, 
        message: "token has been decoded",
        email: userInfo?.email
    })
})

app.listen(5200, () => console.log("decode token server has been started at port 5200"))