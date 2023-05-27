const express = require('express')
const app = express()

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile("E:/Projects/WebDev/Web-Applications/Assignment 1/public/Sci_Calc.html")
})
app.listen(3000)