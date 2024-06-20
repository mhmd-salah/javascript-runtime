
// let list=[];

// function getDodos(callback){
//   setTimeout(()=>{
//     list = [
//       {
//         id:1,
//         name:"learn python basic"
//       }
//     ]
//     callback()
//   },5000)
// }
// console.log(list)


// function fetchUser(callback){
//   setTimeout(()=>{
//     console.log("fetched user with ID 10")
//   },1500)
//   callback()
// }

// fetchUser(()=>{
//   getDodos(()=>{
//     console.log("start fetcheing todos")
//     console.log(list)
//     console.log("Done")
//   })
// })

// test callback hell

let list = [];

function getUserID(callback){
  setTimeout(()=>{
    console.log("user ID is : 1");
    callback();
  },1500)
}

function getTodos(callback){
  setTimeout(() => {
    list = [{
      id:1,
      todo:"learn html"
    }]
    callback()
  }, 2000);
}

getUserID(()=>{
  getTodos(()=>{
    console.log(list)
    console.log("complited fetch")
  })
})

