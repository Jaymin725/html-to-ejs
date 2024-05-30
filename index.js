const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => res.redirect("/index"));

app.get("/error-:code", (req, res) => {
  res.render("error-" + req.params.code);
});

app.get("/authentication-:page", (req, res) => {
  res.render("authentication-" + req.params.page);
});

app.get("/:page-:subpage", (req, res) => {
  res.render("layout", { page: req.params.page + "/" + req.params.subpage });
});

app.get("/:page", (req, res) => {
  res.render("layout", { page: req.params.page });
});

app.listen(port, (err) => {
  if (err) throw err;

  console.log("http://localhost:" + port);
});
