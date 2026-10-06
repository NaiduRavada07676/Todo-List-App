//  todo game:

// let todo = [];

// let req = prompt("please enter your request");

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list"){
//         console.log("------------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("--------------");
//     }
//     else if(req == "add"){
//         let task = promt("please enter the task u want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req == "delete"){
//        let idx = prompt("please enter the task index");
//        todo.splice(idx, 1); 
//        console.log("task deleted");
//     } 
//     else{
//         console.log("please denga");
//     }
//     req = prompt("please enter your request");
// }


// guessing game:

// const max = prompt("enter the max number");

// const random  = Math.floor(Math.random() * max) +1;

// let guess = prompt("guess the number");
// while(true){
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess == random){
//         console.log("you are right congrats!!!",random);
//         break;
//     }
//     else if(guess < random){
//         guess = prompt("Hint:u entered small! try again");
//     }
//     else{
//         guess = prompt("Hint:u entered large! try again");  
//     }
// }


let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item  = document.createElement("li");
    item.innerText =inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.append(delbtn);
    ul.appendChild(item);
    inp.value="";
});
// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
  //             or
ul.addEventListener("click",function(event){
  if (event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted")
  }
})