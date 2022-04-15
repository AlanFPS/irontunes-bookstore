var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

const Records = require("./models/Records.model");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get("/", function (req, res, next) {
  res.render("index", { title: "IronTunes" });
});
app.get("/books", function (req, res, next) {
  res.render("books");
});
app.get("/records", function (req, res, next) {
  res.render("records");
});
app.get("/aboutus", function (req, res, next) {
  res.render("aboutus");
});

app.get("/create-record", function (req, res, next) {
  res.render("create-record");
});

// Create new record
app.post("/create", function (req, res, next) {
  //This is just a function, with regular JS
  Records.create({
    artist: req.body.artist,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    available: req.body.available,
    price: req.body.price,
  })
    .then(function (createdRecord) {
      //for redirect, this is hitting a url
      res.redirect("/all-records");
      // res.render("index");
    })
    .catch(function (error) {
      // res.render("index");
      res.redirect("/all-records");
    });
  });

//Deletes Users
User.findByIdAndRemove("625728c52e343d059d92ed8e", { new: true })
  .then(function (results) {
    console.log("This is what we found", results);
  })
  .catch(function (err) {
    console.log("Something went wrong", err.message);
  });

// Showing all records
    app.get("/all-records", (req, res) => {
      Records.find()
        .then(function (allRecords) {
          res.json(allRecords);
        })
        .catch(function (error) {
          res.json(error);
        });
    });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect("mongodb://localhost/IronTunes") //change exampleApp to your db name
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
module.exports = app;