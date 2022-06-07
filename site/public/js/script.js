

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50)
})

var total_likes1 = 12
var total_likes2 = 54
var total_likes3 = 33

document.getElementById("likes1").innerHTML = `${total_likes1}`
document.getElementById("likes2").innerHTML = `${total_likes2}`
document.getElementById("likes3").innerHTML = `${total_likes3}`

function like1(){
  var coracao = document.getElementsByClassName("coracao")
  var cor = window.getComputedStyle(coracao[0]).backgroundColor;

  if (cor == "rgb(234, 113, 113)"){
    coracao[0].style.backgroundColor = "red"
    coracao[0].classList.remove('hover1');
    total_likes1 += 1
  } else {
    coracao[0].style.backgroundColor = "#ebebeb"
    coracao[0].classList.add('hover1');
    total_likes1 -= 1
  }
  document.getElementById("likes1").innerHTML = `${total_likes1}`
}

function like2(){
  var coracao = document.getElementsByClassName("coracao")
  var cor = window.getComputedStyle(coracao[1]).backgroundColor;

  if (cor == "rgb(234, 113, 113)"){
    coracao[1].style.backgroundColor = "red"
    coracao[1].classList.remove('hover1');
    total_likes2 += 1
  } else {
    coracao[1].style.backgroundColor = "#ebebeb"
    coracao[1].classList.add('hover1');
    total_likes2 -= 1
  }
  document.getElementById("likes2").innerHTML = `${total_likes2}`
}

function like3(){
  var coracao = document.getElementsByClassName("coracao")
  var cor = window.getComputedStyle(coracao[2]).backgroundColor;

  if (cor == "rgb(234, 113, 113)"){
    coracao[2].style.backgroundColor = "red"
    coracao[2].classList.remove('hover1');
    total_likes3 += 1
  } else {
    coracao[2].style.backgroundColor = "#ebebeb"
    coracao[2].classList.add('hover1');
    total_likes3 -= 1
  }
  document.getElementById("likes3").innerHTML = `${total_likes3}`
}

function validarSessao() {

  var id = sessionStorage.ID_USUARIO;

  if (id == null) {
    window.location = "../../pages/cadastro-login/login.html";
  }
}

function limparSessao() {
  sessionStorage.clear();
  window.location = "../../pages/cadastro-login/login.html";
}