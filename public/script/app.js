// import './fa.min';

const year = document.getElementById('year');

year.innerHTML = new Date().getFullYear();

function Hide(){
    let x = '30px';
    let y = '-147px';
    menu();
    function menu() {
        if(document.getElementById('nav-bar').style.top == x){
            document.getElementById('nav-bar').style.top = y;
        }else{
            document.getElementById('nav-bar').style.top = x;
        }
    }

}



window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById('scroll-btn').style.display = "flex";
    } else {
        document.getElementById('scroll-btn').style.display = "none";
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('header').style.position = "fixed";
        document.getElementById('header').style.backgroundColor = "#121247";
    } else {
        document.getElementById('header').style.position = "absolute";
        document.getElementById('header').style.backgroundColor = "";
    }
}


var i = 0;
var txt = 'Hello I\'m Tommy 👋🏾';
var speed = 250;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// setInterval(typeWriter, 250);
typeWriter();