const Jimp = require("jimp");
const express = require("express")
const cors = require("cors");
const path = require("path")
const fs = require("fs")
const app = express();
app.use(express.json())
app.use(cors())

let uid;

app.get("/", (req, res) => {
    res.send("Welcome to the backend of CFA certificate generator. Frontend is deployed at https://cfa-certificate-generation.web.app/")
})

app.post("/1", (req, res) => {
    uid = Date.now()
    const { name } = req.body
    console.log(req.body)
    processImage(name, res, "bcc", "bcc_processed")

})
app.post("/2", (req, res) => {
    uid = Date.now()
    const { name } = req.body
    console.log(req.body)
    processImage(name, res, "dlc", "dlc_processed")

})

app.get(`/certificate/bcc/:nonce`, (req, res) => {
    console.log("UID is:(from GET 1) ", req.params.nonce)
    res.sendFile(path.join(__dirname, "/certs/bcc_processed.jpg"))
})
app.get(`/certificate/dlc/:nonce`, (req, res) => {
    console.log("UID is:(from GET 2) ", req.params.nonce)
    res.sendFile(path.join(__dirname, "/certs/dlc_processed.jpg"))
})

const processImage = async (name, res, filename, modifiedFileName) => {
    name = name.split(" ").map(e => e[0].toUpperCase() + e.split("").splice(1).join("")).join(" ")
    console.log("UID is: ", uid)
    await Jimp.read(path.join(__dirname, `/certs/${filename}.jpg`))
        .then(async image => {
            const font = await Jimp.loadFont(path.join(__dirname, "segoepr/segoepr.fnt"));
            image.print(font, 440, 330, name)
            await image.writeAsync(path.join(__dirname, `/certs/${modifiedFileName}.jpg`))
            res.end(`https://cfa-certificate-generator.herokuapp.com/certificate/${filename}/${uid}`)
        })
        .catch(err => console.log(err));

}

app.listen(process.env.PORT || 5000, () => {
    console.log("listening in port 5000")
})