


// self-invoking  function

((arr) => {
    console.log(`hello ${arr}`);
  }
)("world")


console.log("hello")


// // Ex:

(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();