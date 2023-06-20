const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}
if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}


var modal = document.getElementById("modal");

var chck = document.getElementById("checkout2")

var submit = document.getElementById("submit");

var span = document.getElementsByClassName("close")[0];

var backhome = document.getElementById("backhome");

var btn = document.getElementById("myBtn");

function displaymodal(chck){
  window.location.href = "thankyou.html"
}
function checkout (btn){
  window.location.href = "checkout.html"
}

submit.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
backhome.onclick = function() {
    window.location.href = "index.html"
  }
