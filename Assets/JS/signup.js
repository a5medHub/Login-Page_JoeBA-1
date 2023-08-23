import {BackupUsers,AllUsersData} from "./Assets/JS/users.js"

// const user = new User("1234567890", "<NAME>", "Mexico City");
let LoginbtnEl = document.getElementById('Loginbtn')
let RegisterUserEl = document.getElementById('RegisterUser')
let RegisterPassEl = document.getElementById('RegisterPass')
let RegisterVerifyPassEl = document.getElementById('RegisterVerifyPass')
let RegiterSubmitbtnEl = document.getElementById('RegiterSubmitbtn')
let RegiterLoginbtnEl = document.getElementById('RegiterLoginbtn')
let UserName = RegisterUserEl
let UserPassword

// function SubmitbtnEl(){
//     if(RegisterPassEl.value == RegisterVerifyPassEl.value && RegisterPassEl.value !=="") {
//         // alert('correct')
//         console.log(`UserName is : ${UserName.value}
//     password is : ${RegisterPassEl.value}`)
//     }
// }
RegiterSubmitbtnEl.addEventListener('click', function(){
    if(RegisterPassEl.value == RegisterVerifyPassEl.value && RegisterPassEl.value !=="") {
        // alert('correct')
        console.log(`UserName is : ${UserName.value}
    password is : ${RegisterPassEl.value}`)
    }
})
document.title = "Sign Up"
LoginbtnEl.addEventListener('click', function(){
    window.location.replace("index.html")
}) 