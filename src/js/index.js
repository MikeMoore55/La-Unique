/* loading screen until all dom content is loaded */

function onReady(callback) {

  const intervalId = window.setInterval(function() {

    if (document.getElementsByTagName('body')[0] !== undefined) {

      window.clearInterval(intervalId);
      callback.call(this);

    }
  }, 
  1000);

}

function setVisible(selector, visible) {

  document.querySelector(selector).style.display = visible ? 'block' : 'none';

}

onReady(function() {

  setVisible('.page', true);
  setVisible('#loading', false);

});


/* to make a different navigation appear for mobile */

const nav = document.querySelector("#nav-bar-mobile")

function toggleNavOn(){
  nav.style.display="block";
}

function toggleNavOff(){
  nav.style.display="none";
}


/* about functionality for mobile to appear directly under each button */

document.querySelector("#main").addEventListener("click", toggleNavOff)

const hisBtnMobile = document.querySelector("#history-btn");
const expBtnMobile = document.querySelector("#experience-btn");
const slnBtnMobile = document.querySelector("#salon-btn");

const hisContMobile = document.querySelector("#history-info-mobile");
const expContMobile = document.querySelector("#experience-info-mobile");
const slnContMobile = document.querySelector("#salon-info-mobile");

hisContMobile.style.display="none";
expContMobile.style.display="none";
slnContMobile.style.display="none";

function showHisMobile(){
  hisBtnMobile.style.backgroundColor = "#8A4D47";
  expBtnMobile.style.backgroundColor = "#D6A49A";
  slnBtnMobile.style.backgroundColor = "#D6A49A";
  hisContMobile.style.display="block";
  expContMobile.style.display="none";
  slnContMobile.style.display="none";
}

function showExpMobile(){
  hisBtnMobile.style.backgroundColor = "#D6A49A";
  expBtnMobile.style.backgroundColor = "#8A4D47";
  slnBtnMobile.style.backgroundColor = "#D6A49A";
  expContMobile.style.display="block";
  hisContMobile.style.display="none";
  slnContMobile.style.display="none";
}

function showSlnMobile(){
  hisBtnMobile.style.backgroundColor = "#D6A49A";
  expBtnMobile.style.backgroundColor = "#D6A49A";
  slnBtnMobile.style.backgroundColor = "#8A4D47";
  slnContMobile.style.display="block";
  expContMobile.style.display="none";
  hisContMobile.style.display="none";
}

function hideHisMobile(){
  hisContMobile.style.display="none";
  hisBtnMobile.style.backgroundColor = "#D6A49A";
}

function hideExpMobile(){
  expContMobile.style.display="none";
  expBtnMobile.style.backgroundColor = "#D6A49A";
}

function hideSlnMobile(){
  slnContMobile.style.display="none";
  slnBtnMobile.style.backgroundColor = "#D6A49A";
}


/* about functionality for large screens to appear directly under the entire btn container */

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


/* When the user clicks on the button, scroll to the top of the document */

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}