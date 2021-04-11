//initialize the server
//Call the modules
const mongoose = require("mongoose");

//
mongoose.connect("mongodb://localhost:27017/personsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Schema
const conejaSchema = new mongoose.Schema({
  name: String,
  edad: Number,
  estatura: String,
});
//Model
const Coneja = mongoose.model("Coneja", conejaSchema);
//Constructor of new object
const coneja = new Coneja({ name: "coneja", edad: 25, estatura: "Chaparra" });
//Call the function
coneja.save();
/*
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({ name: "John", age: 78 });

person.save();
*/
