const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("layout", { page: "index" });
});

app.get("/error-:code", (req, res) => {
  res.render("error-" + req.params.code);
});

app.get("/authentication-:page", (req, res) => {
  res.render("authentication-" + req.params.page);
});

app.get("/form-:page", (req, res) => {
  res.render("layout", { page: "form/" + req.params.page });
});

app.get("/icon-:page", (req, res) => {
  res.render("layout", { page: "icon/" + req.params.page });
});

app.get("/pages-:page", (req, res) => {
  res.render("layout", { page: "pages/" + req.params.page });
});

app.get("/:page", (req, res) => {
  res.render("layout", { page: req.params.page });
});

app.listen(port, (err) => {
  if (err) throw err;

  console.log("http://localhost:" + port);
});
