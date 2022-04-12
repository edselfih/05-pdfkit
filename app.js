const express = require("express");
const path = require("path");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const filePath = './output.pdf'

fs.unlink(filePath, (err) => {
  if (err) {
    console.error(err)
    return
  }

  //file removed
})

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream("output.pdf"));

// Embed a font, set the font size, and render some text
doc
  .font("Courier")
  .fontSize(25)
  .text("Some text with an embedded font!", 100, 100);

doc.moveTo(50, 150)
    .lineTo(600, 150)
    .stroke(); 

doc.end();

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000, () => {
  console.log("server aktif");
});
