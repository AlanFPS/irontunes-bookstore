const mongoose = require("mongoose");
const Book = require("../models/Books.models");

let booksArr = [
  {
    title: "The Wolf Den",
    coverImg:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781454946540_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    genre: "Fiction",
    rating: "74",
    author: "Elodie Harper",
    price: 13.49,
  },
  {
    title: "Woman on Fire",
    coverImg:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780063040885_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    genre: "Romance",
    rating: "81",
    author: "Lisa Barr",
    price: 21.99,
  },
  {
    title: "A Solitude of Wolverines",
    coverImg:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780062982087_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    genre: "Drama",
    rating: "65",
    author: "Alice Henderson",
    price: 18.49,
  },
  {
    title: "Iron Widow",
    coverImg:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780735269934_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    genre: "Fantasy",
    rating: "84",
    author: "Xiran Jay Zhao",
    price: 23.49,
  },
  {
    title: "Summer Days",
    coverImg:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780369718570_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    genre: "Romance",
    rating: "72",
    author: "Susan Mallery",
    price: 24.99,
  },
];

mongoose
  .connect("mongodb://localhost/IronTunes") //change hackathonTest to your db name
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

Book.create(booksArr)
  .then(function (results) {
    console.log("Books saved", results);
    mongoose.connection.close();
  })
  .catch(function (error) {
    console.log("Something went wrong", error.message);
    mongoose.connection.close();
  });
