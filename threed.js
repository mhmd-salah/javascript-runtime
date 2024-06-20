

console.log("first")

setTimeout(()=>{
  console.log("middle")
},0)

console.log("last")

// output
/*

- first
- last
- middle

*/