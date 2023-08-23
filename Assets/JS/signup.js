let LoginbtnEl = document.getElementById('Loginbtn')
let RegisterPassEl = document.getElementById('RegisterPass')
let RegisterVerifyPassEl = document.getElementById('RegisterVerifyPass')
let RegiterSubmitbtnEl = document.getElementById('RegiterSubmitbtn')
let RegiterLoginbtnEl = document.getElementById('RegiterLoginbtn')

RegiterSubmitbtnEl.addEventListener('hover', function(){
    if(RegisterPassEl.value == RegisterVerifyPassEl.value){
        alert('correct')
    }
})
document.title = "Sign Up"
LoginbtnEl.addEventListener('click', function(){
    window.location.replace("index.html")
})