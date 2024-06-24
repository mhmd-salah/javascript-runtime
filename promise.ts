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

type user = { id: number; username: string };

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

let cor = true;
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
function getdata() {
  console.log("start get data");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("success!");
    }, 1500);
  });
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

// function fetchUserID(){
//   console.log("start fetch user ID")
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       rej("rejected promise")
//     }, 2000);
//   })
// }
// console.log("before fetch user id")
// fetchUserID().then(
//   (res)=>{
//     console.log(res)
//     console.log(fetchUserID());
//   },
//   (rej)=> console.log(rej)
// )
// console.log("after promise")

// console.log("hello")

type Tuser = {
  role: "ADMIN" | "USER";
  id: number;
  name: string;
};
type TTodo = {
  id: number;
  todo: string;
  userID: number;
};

function fetchUserId() {
  console.log("start fetch user id");
  return new Promise<Tuser>((res, rej) => {
    setTimeout(() => {
      res({
        role: "ADMIN",
        id: 1,
        name: "mohamed salah",
      });
    }, 2000);
  });
}

function success(data: Tuser) {
  console.log("success");
  if (data.role == "ADMIN") {
    console.log("Welcome to Admin");
  } else {
    console.log("Welcome to User");
  }
  console.log(data);
}
function error(err: any) {
  console.log("error");
  console.log(err);
}

function topFunc() {
  console.log("top");
  return function middle() {
    console.log("midlle");
    return function endFunc() {
      console.log("end");
    };
  };
}
// topFunc()()

let todoList: TTodo[] = [];

function getID() {
  return new Promise<Tuser>((res, rej) => {
    console.log("start");
    setTimeout(() => {
      res({
        role: "USER",
        id: 1,
        name: "mohamed salah",
      });
    }, 2000);
    console.log("end");
  });
}

function getUserTodos() {
  console.log("start get uset todos");
  return new Promise<TTodo[]>((res, rej) => {
    setTimeout(() => {
      todoList = [
        {
          id: 1,
          todo: "learn html",
          userID: 5,
        },
        {
          id: 2,
          todo: "learn css",
          userID: 5,
        },
      ];
      res(todoList);
    }, 3000);
  });
}
type op = {
  userID: number;
};
let op: op[] = [];
function FID() {
  return new Promise<{ id: number }>((res, rej) => {
    setTimeout(() => {
      res({ id: 1 });
    }, 2000);
  });
}
function FUserId(userId) {
  return new Promise<op[]>((res, rej) => {
    setTimeout(() => {
      res(userId);
      console.log(op);
    }, 2000);
  });
}

let todos:TTodo[] = [];
function getUsetTodos(uset: Tuser) {
  return new Promise<TTodo[]>((res, rej) => {
    setTimeout(() => {
      let todos = [
        {
          id: 1,
          todo: "Do learn html",
          userID: 10,
        },
        {
          id: 1,
          todo: "Do learn html",
          userID: 11,
        },
        {
          id: 1,
          todo: "Do learn html",
          userID: 12,
        },
      ];
      res(todos)
    }, 3000);
  });
}
