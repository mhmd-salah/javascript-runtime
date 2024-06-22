// let correct = true
// let fPromise = new Promise(function(resove,reject){
//   if(correct){
//     resove("resolve")
//   }else{
//     reject("reject")
//   }
// })
// console.log(fPromise)
type TUser = { id: number; username: string };
function getUserID() {
  console.log("fetch user id ");
  return new Promise<TUser>(function (resolve, reject) {
    setTimeout(() => {
      console.log("fetched user id is : 10");
      resolve({
        id: 10,
        username: "salah",
      });
    }, 1500);
  });
}

// getUserID().then(user=> console.log(user , "from promise"));

type user = {id:number,username:string};

// function fetchUsetID(){
//   console.log("start fetch user ID")
//   return new Promise<user>(function(resolve,reject){
//     setTimeout(() => {
//       resolve({
//         id:10,
//         username:"mohamed"
//       })
//     }, 1500);
//   }).then((user)=>console.log(user))
// }
// console.log("before")
// fetchUsetID()
// console.log("after")

let cor =true;
// let prom = new Promise((res,rej)=>{
//   setTimeout(() => {
//     if(cor){
//       res("success!")
//     }else{
//       rej("faild")
//     }
//   }, 2000);
// }).then(respon=> console.log(respon)).catch((err)=>console.log(err))

//functino return promise
function getdata(){
  console.log("start get data")
  return new Promise((res,rej)=>{
    setTimeout(() => {
      res("success!")
    }, 1500);
  })
}
// getdata().then((res)=>res)

// let nPomise = new Promise<string>((res,rej)=>{
//   let correct = false;
//   if(correct){
//     res("resolved promise")
//   }else{
//     rej("rejected promise")
//   }
// }).then(
//   response=>console.log(response),
//   rejected=>console.log(rejected)
// ).finally(()=>{
//   console.log("the program is finshed")
// })


function fetchUserID(){
  console.log("start fetch user ID")
  return new Promise((res,rej)=>{
    setTimeout(() => {
      rej("rejected promise")
    }, 2000);
  })
}
console.log("before fetch user id")
fetchUserID().then(
  (res)=>{
    console.log(res)
    console.log(fetchUserID());
  },
  (rej)=> console.log(rej)
)
console.log("after promise")