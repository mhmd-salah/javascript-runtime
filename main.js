function one() {
  console.log("one");
  tow();
}
function tow() {
  console.log("tow");
  three();
}
function three() {
  console.log("three");
}
one();
// callback function

function greet(name, callback) {
  console.log("hi " + name);
  callback();
}
greet("mohamed", function () {
  console.log("hello from callback function");
});

function start() {
  console.log("start");
  end();
}
function end() {
  console.log("end");
}
// start();

//////////////////

function first() {
  console.log("first");
  second();
}
function second() {
  console.log("second");
  getPorductsAPI();
  thrid();
}
function thrid() {
  console.log("thrid");
}
function getPorductsAPI() {
  setTimeout(() => {
    console.log("Fetching Data ...");
  }, 2000);
}

first();

