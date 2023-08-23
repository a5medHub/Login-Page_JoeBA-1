let LoginbtnEl = document.getElementById('Loginbtn')
let RegisterUserEl = document.getElementById('RegisterUser')
let RegisterPassEl = document.getElementById('RegisterPass')
let RegisterVerifyPassEl = document.getElementById('RegisterVerifyPass')
let RegiterSubmitbtnEl = document.getElementById('RegiterSubmitbtn')
let RegiterLoginbtnEl = document.getElementById('RegiterLoginbtn')
let UserName
let UserPassword
RegiterSubmitbtnEl.addEventListener('mouseover', function(){
    if(RegisterPassEl.value == RegisterVerifyPassEl.value && RegisterPassEl.value !=="") {
        // alert('correct')
        UserName == RegisterUserEl.value
        UserPassword == RegisterPassEl.value
        alert(UserName, UserPassword)
    }
})
document.title = "Sign Up"
LoginbtnEl.addEventListener('click', function(){
    window.location.replace("index.html")
})
