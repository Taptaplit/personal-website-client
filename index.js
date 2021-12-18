const express = require("express")
const app = express()
const port = 3000 || process.ENV.PORT



app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.redirect("/v-1")
})

app.get("/v-1", (req, res) => {
    res.sendFile(__dirname + "/v-1/index.html");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
