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
    hisCont.style.display="block";
    expCont.style.display="none";
    slnCont.style.display="none";
}

function showExp(){
    expCont.style.display="block";
    hisCont.style.display="none";
    slnCont.style.display="none";
}

function showSln(){
    slnCont.style.display="block";
    expCont.style.display="none";
    hisCont.style.display="none";
}

function hideHis(){
    hisCont.style.display="none";
}

function hideExp(){
    expCont.style.display="none";
}

function hideSln(){
    slnCont.style.display="none";
}