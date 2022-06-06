window.addEventListener("scroll", function(){
    var header = document.querySelector("#header_lp");
    header.classList.toggle("sticky", window.scrollY > 50)
  })