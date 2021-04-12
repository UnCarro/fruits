//initialize the server
//Call the modules
const mongoose = require("mongoose");

//
mongoose.connect("mongodb://localhost:27017/personsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({ name: "John", age: 78 });

person.find(function (err, person) {
  if (err) {
    console.log(err);
  } else {
    person.forEach((person) => {
      console.log(person.name);
    });
  }
});
