//initialize the server
//Call the modules
const mongoose = require("mongoose");

//
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "enter a fruit, plis"] },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  review: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "",
  rating: 1,
  review: "Nothing to say, a fruit",
});
//#####Para arreglar
//const error = ;

//fruit.save();
/*
Fruit.deleteMany({ name: "Durango" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Ya quedó");
  }
});
*/
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
      mongoose.connection.close();
    });
  }
});
