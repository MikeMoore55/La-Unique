/* nav for mobile view */

const nav = document.querySelector("#nav-bar")

function toggleNavOn(){
  nav.style.display="block";
}

function toggleNavOff(){
  nav.style.display="none";
}

document.querySelector("#main").addEventListener("click", toggleNavOff)

const hisBtn = document.querySelector("#history-btn");
const expBtn = document.querySelector("#experience-btn");
const slnBtn = document.querySelector("#salon-btn");

const hisCont = document.querySelector("#history-info");
const expCont = document.querySelector("#experience-info");
const slnCont = document.querySelector("#salon-info");

hisCont.style.display="none";

expCont.style.display="none";
slnCont.style.display="none";

function showHis(){
    hisBtn.style.backgroundColor = "#8A4D47";
    expBtn.style.backgroundColor = "#D6A49A";
    slnBtn.style.backgroundColor = "#D6A49A";

    hisCont.style.display="block";
    expCont.style.display="none";
    slnCont.style.display="none";
}

function showExp(){
    hisBtn.style.backgroundColor = "#D6A49A";
    expBtn.style.backgroundColor = "#8A4D47";
    slnBtn.style.backgroundColor = "#D6A49A";
    expCont.style.display="block";
    hisCont.style.display="none";
    slnCont.style.display="none";
}

function showSln(){
    hisBtn.style.backgroundColor = "#D6A49A";
    expBtn.style.backgroundColor = "#D6A49A";
    slnBtn.style.backgroundColor = "#8A4D47";
    slnCont.style.display="block";
    expCont.style.display="none";
    hisCont.style.display="none";
}

function hideHis(){
    hisCont.style.display="none";
    hisBtn.style.backgroundColor = "#D6A49A";
}

function hideExp(){
    expCont.style.display="none";
    expBtn.style.backgroundColor = "#D6A49A";
}

function hideSln(){
    slnCont.style.display="none";
    slnBtn.style.backgroundColor = "#D6A49A";
}

//Get the button
/* var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
} */

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}