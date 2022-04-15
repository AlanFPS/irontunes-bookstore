const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: ["Fantasy", "Romance", "Fiction", "Drama"],
    },
    rating: {
      type: Number,
    },
    author: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;
