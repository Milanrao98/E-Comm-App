let password = document.querySelector(".password")
let list = document.querySelector(".list")
let para1 = document.querySelector(".para1")
let para2 = document.querySelector(".para2")
let para3 = document.querySelector(".para3")
let para4 = document.querySelector(".para4")
let flag = false
function inputHandler(){

    
    inputData = password.value
 

    for(let i =0;i<=inputData.length-1;i++){
        if(i>="a" && i<="z"){
            flag=true
        }
        else if(i>=0 && i<=9){
            flag= true
        }
          else if(i===8){
            flag= true
        }
          else if(i>="A" && i<="Z"){
            flag= true
        }
        
        if(flag){

        }
    }
    
    
}


password.addEventListener("input",inputHandler)