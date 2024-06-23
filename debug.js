(function start(){
  console.log("start");
})()

setTimeout(() => {
  console.log("async")
}, 0);

(function end(){
  console.log("end")
})()