// global exquation context
function first(){
  console.log("first")
  second()
}
function second(){
  console.log("second")
  getProductViaAPI()
  thrid()
}
function thrid(){
  console.log("thrid")
}
function getProductViaAPI(){
  setTimeout(()=>{
    console.log("Fetching products ...");
  },0)
}

first()
second()


