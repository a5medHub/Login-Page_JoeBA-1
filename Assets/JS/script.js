let userEl = document.getElementById("User")
let passEl = document.getElementById("Pass")
let loginBtn = document.getElementById("Loginbtn")
document.title = "Log In"
let counter = 0
let users = [["admin01","123"],["admin02","234"],["admin03","345"]]
let SignupbtnEl = document.getElementById('Signupbtn')
let parentEl = document.getElementById('parent')
let childEl = document.createElement('p')



// loginBtn.addEventListener("click", function(){
// if(counter >=3){
//     alert(`Max limit attempts reached`)
// }else{
//     counter ++
//     // alert(`Incorrect Username or Password <br> You still have ${3-counter}`)
//     for(let i=0; i<users.length; i++){
//         if(userEl.value == users[i][0] && passEl.value == users[i][1]){
//             document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
//             setTimeout(second_page,3000)
//             // if((userEl.value = true) && (passEl.value = true)){
//             //     document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
//             // setTimeout(second_page,3000)
//             }else{
//                 alert(`Incorrect Username or Password 
// You still have ${3-counter} atttempts`)
//                 break
//             }
//         }
//     }
    
// })
passEl.addEventListener("keypress", function(event){ //add keypress ENTER for Login Btn
    if (event.key === 'Enter'){                     // check if the Enter key of the keybord is pressed
        event.preventDefault()                      // run function preventDefault
        document.getElementById("Loginbtn").click() // triger the button logIn
    }
})

// passEl.addEventListener("keypress", function(event){ 
//         console.log("key pressed", event.key)
// })
loginBtn.addEventListener("click", function(){

    
        if(counter>=3){
            alert(`Max limit attempts reached`)
        }else if(userEl.value == "admin01" && passEl.value == "123"){
            document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
            setTimeout(second_page,3000)
        }else if(userEl.value == "admin02" && passEl.value == "234"){
            document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
            setTimeout(second_page,3000)
        }else if(userEl.value == "admin03" && passEl.value == "345"){
            document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
            setTimeout(second_page,3000)
        }else{
            counter ++
            // alert(`Incorrect Username or Password 
            // You still have ${3-counter} atttempts`)
            childEl.innerHTML= `Incorrect Username or Password You still have ${3-counter} atttempts` //<p>hello user</p> same in html
            childEl.style.color = '#ff0'
            childEl.style.fontSize = '10px'
            parentEl.appendChild(childEl)
            setTimeout(incorrectUser, 2000)
        }
   
    })
    

function second_page(){
    window.location.replace("list.html")
}     
function incorrectUser(){
    parentEl.removeChild(childEl)
    // childEl.remove()
    userEl.value = ''  
    passEl.value = ''
    userEl.focus()
    // document.getElementById('User').focus()
}     

SignupbtnEl.addEventListener('click', function(){
    window.location.replace("signup.html")
})