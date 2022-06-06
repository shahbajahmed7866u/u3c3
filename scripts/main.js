document.querySelector("#submit").addEventListener("click",haha)

function haha(){
    var obj={
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    address:document.querySelector("#address").value,
    amount:document.querySelector("#amount").value,
}
localStorage.setItem("user",JSON.stringify(obj))

document.querySelector("#name").value=null
document.querySelector("#email").value=null
document.querySelector("#address").value=null
document.querySelector("#amount").value=null
}