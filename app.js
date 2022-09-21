const acc = document.getElementsByClassName("accordion");
const addToCart = document.querySelector(".add__to__cart")
const err = document.querySelector(".error")
const success = document.querySelector(".success")
const sizesBtn = document.getElementsByClassName("sizes")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const quantity = document.getElementById("quantity")
const btnVal = document.getElementById("btn__val")
let size = '';

console.log(acc, sizesBtn)
 for(var i = 0;i<sizesBtn.length;i++){
    console.log(sizesBtn[i].value)
     sizesBtn[i].addEventListener('click', ()=>{
         console.log(sizesBtn[i].value)
         size = sizesBtn[i].value
     })
}

// plus the quantity value
plus.addEventListener("click", ()=>{
  let val = parseInt(quantity.value) 
  let value = val + 1
  quantity.value = value
  btnVal.innerText = value
  console.log(quantity.value)
})

// minus the quantity value
minus.addEventListener("click", ()=>{
  let val = parseInt(quantity.value) 
  let value = val - 1
  quantity.value = value
  btnVal.innerText = value
  console.log(quantity.value)
})

// handle addToCart click
addToCart.addEventListener('click', ()=>{
    if(size == '')
     err.style.display = "block"
     else{
         err.style.display = "none"
      success.style.display = "block"
     }
})
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}