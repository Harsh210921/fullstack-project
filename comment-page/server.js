const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
const PORT = 7777;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post('/', (req, res) => {
    const { comment } = req.body;
    let content = JSON.parse(fs.readFileSync("db.json"));
    content.push(comment);

    fs.writeFileSync("db.json", JSON.stringify(content, null, 2));
    res.json(content);

})


app.listen(PORT, () => {
    console.log(`the server is live on ${PORT}`)
})