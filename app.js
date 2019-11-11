//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://localhost:27017/fruitsDB",
  {useNewUrlParser: true},
  {useUnifiedTopology: true}
);

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit ({
//   name: "Apple",
//   rating: 7,
//   review: "Solid fruit"
// });
//
// fruit.save();
//
// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
//
const Person = mongoose.model("Person", fruitSchema);
//
// const person = new Person ({
//   name: "John",
//   age: 37
// });
//
// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 5,
  review: "Nice color"
});
const orange = new Fruit({
  name: "Orange",
  score: 5,
  review: "Sour"
});
const banana = new Fruit({
  name: "Banana",
  score: 9,
  review: "Sweet!"
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// //Function to find the elements in the db
Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
})
