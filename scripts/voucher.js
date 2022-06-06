
haha()

async function haha(){
try{
    var url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
    
    let res = await fetch(url)
    
    let data = await res.json()
    
    fullmoz(data[0].vouchers)
    console.log(data[0])
}
catch (err){
    console.log(err)
}
}

var userArr = JSON.parse(localStorage.getItem("user"))

console.log(userArr.amount)

var total = JSON.parse(localStorage.getItem("total"))|| 0
yahu(userArr)

function yahu(userArr){
    console.log(userArr)
   

    var max=userArr.amount-total
    

    document.querySelector("#wallet_balance").innerText=(max)
localStorage.setItem("amount",max)
}


function fullmoz(data){
var voucher_list=document.querySelector("#voucher_list")
    data.forEach(function(elem){
        var voucher = document.createElement("div")
        voucher.setAttribute("class","voucher")
        var name = document.createElement("p")
        name.innerText=elem.name
        var image = document.createElement("img")
        image.src=elem.image
        var image = document.createElement("img")
        image.src=elem.image
        var price = document.createElement("p")
        price.innerText=elem.price
        var button = document.createElement("button")
        button.innerText="Purchase"
        button.setAttribute("class","buy_voucher")
        button.addEventListener("click",function(){
            haiya(elem)
        })
        voucher.append(image,name,price,button)
        
        // console.log(name.innerText,image.src)
        voucher_list.append(voucher)
    });
} 


var purchaseArr= JSON.parse(localStorage.getItem("purchase")) || []
function haiya(elem){
    // console.log(elem)
var obj={
    name:elem.name,
    image:elem.image,
    price:elem.price
}
total+=elem.price
purchaseArr.push(obj)
if(elem.price<document.querySelector("#wallet_balance").innerText){
localStorage.setItem("purchase",JSON.stringify(purchaseArr))
localStorage.setItem("total",JSON.stringify(total))
alert("Hurray! purchase successful")
window.location.reload()
}
else{
    alert("Sorry! insufficient balance")
}
}
