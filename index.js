const express = require("express")
const request = require("request")
const app = express()
const port = 3000 || process.ENV.PORT



app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.redirect("/v-1")
})

app.get("/v-1", async (req, res) => {
    request({url: 'https://portfolio-backend-mongo-server.herokuapp.com/about/skill-content', json: true}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.render('v-1/pages/index', {skills: body.result});
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
