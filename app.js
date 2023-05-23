const express = require("express")
const app = express()
const port = 3000
const path = require("path")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/suit", (req, res) => {
    res.render("suit")
})




app.listen(port, () => {
    console.log(`app listening at port:${port}`)
})