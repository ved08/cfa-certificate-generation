const fs = require("fs")
const express = require("express");
const pdf = require("html-pdf");
const cors = require("cors");
const Jimp = require("jimp")
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()
const pdfTemplate = require("./template")
const pdfToBase64 = require("pdf-to-base64");
const { student, teacher, donor } = require("./certificateShema");
const { counter1, counter2, counter3 } = require("./counterSchema");

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.redirect("/pdf")
})
app.post("/generate-invoice", (req, res) => {
    pdf.create(pdfTemplate(req.body), {
        height: `${428 * 1.3}px`,
        width: `${629 * 1.3}px`,
        border: "0",
        // format: "letter",
        // orientation: "landscape"
    }).toFile(`${req.body.name + req.body.aadhar}.pdf`, err => {
        if (err) {
            res.send("error while creating pdf")
        }
        pdfToBase64(`${req.body.name + req.body.aadhar}.pdf`)
            .then(response => {
                res.send(response)
            }).catch(err => {
                res.send(err)
            })
    })

})
app.post("/generate-certificate", async (req, response) => {
    let { name, batch, email, contact, type, fontSize } = req.body;
    let textSize = fontSize?.length ? fontSize : 20
    console.log(textSize)
    // Generating a certificate
    let imageUrl;
    // change imageUrl ASAP!
    let certificate;
    let counter;
    if (type == 1) {
        imageUrl = `https://rophyllo.sirv.com/Images/student-certificate.jpg?text=${name}&text.size=${textSize}&text.color=white&text.position.x=-39%&text.position.y=-54%`
        type = "Student Course Completion"
        certificate = student
        counter = counter1;
    } else if (type == 2) {
        imageUrl = `https://rophyllo.sirv.com/Images/mentor-for-change.jpg?text=${name}&text.size=${textSize}&text.color=black&text.position.x=-76.3%&text.position.y=-50%`
        type = "Mentor For change"
        certificate = teacher;
        counter = counter2;
    } else {
        imageUrl = `https://rophyllo.sirv.com/Images/5_6298476613671584348/5_6309573885746480048.jpg?text=${name}&text.size=${textSize}&text.color=black&text.position=center`
        type = "Donator"
        certificate = donor;
        counter = counter3;
    }
    let count, keyId;

    console.log(req.body)
    // if (imageUrl !== `https://rophyllo.sirv.com/Images/5_6298476613671584348/5_6309573885746480048.jpg?text=${name}&text.size=${textSize}&text.color=black&text.position=center`) {

    await counter.findOne({ key: "CFA123" }).then(data => {
        count = data.count
        console.clear()
        console.log(count, "count")
        if (String(count).length == 1) {
            keyId = batch + "00" + count
        } else if (String(count).length == 2) {
            keyId = batch + "0" + count
        }
        else if (String(count).length == 3) {
            keyId = batch + count
        }
        console.log({ keyId, count })
        count += 1
    });
    const convertToBase64 = async (cb) => {
        await Jimp.read(imageUrl)
            .then(async image => {
                console.log(keyId)
                loadedImage = image;
                let font;
                console.log("type is: ", type, typeof type)
                if (type == "Student Course Completion") {
                    font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
                    image.print(font, 70, 20, keyId)
                } else {
                    font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
                    image.print(font, 100, 50, keyId)
                }
                await image.writeAsync("certificate.jpg")
            })
            .catch(err => console.log(err));
        let buffer = fs.readFileSync("certificate.jpg", { encoding: 'base64' });
        let base64Uri = "data:image/jpg;base64," + buffer;
        response.send(base64Uri)
    }
    convertToBase64()
    // }

    // request.head(imageUrl, (err, res, body) => {
    //     request(imageUrl).pipe(fs.createWriteStream("certificate.jpg")).on("close", () => {
    //         console.log("saved image certificate.jpg")
    //     })
    // })




    await new certificate({
        name,
        keyId,
        email,
        contact,
        certificateType: type
    }).save().then((res, err) => {
        if (!err) {
            console.log("saved certificate data")
        } else console.log(err)
    })

    console.log("new count", count)
    await counter.updateOne({ key: "CFA123" }, { count }).then((err, docs) => {
        if (!err) {

            console.log("updated docs: ", docs)
        } else console.log(err)

    })
})

app.get("/pdf", (req, res) => {
    const { name, phn, street, locality, state, aadhar, description, amount } = req.bosy
    pdf.create(pdfTemplate({
        invoiceNum: "123",
        name,
        phn,
        street,
        locality,
        state,
        aadhar,
        description,
        amount
    }), {
        height: `${428 * 1.3}px`,
        width: `${629 * 1.3}px`,
        border: "0",
        // format: "letter",
        // orientation: "landscape"
    }).toFile("invoice.pdf", err => {
        if (err) {
            console.log(err)
        }
        res.sendFile(`${__dirname}/invoice.pdf`)
    })
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Listening in PORT 3001")
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Connected to DB")).catch(err => console.error(err))
})