const express = require("express");
const upload = require("express-fileupload");

const app = express();
app.use(upload());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  if (req.files) {
    console.log(req.files);
    var file = req.files.file;
    var filename = file.name;
    console.log(filename);
    file.mv("./uploads/" + filename, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("File Uploaded!");
      }
    });
  }
});
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`
  Listening on ${port}\n visit http://localhost:${port}
  `);
});
// This is an edit from GitHub VSCode editor.