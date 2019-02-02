var x = document.getElementById("sound1"); 
var name;


function testFunction() {
    console.log('Testing....');
	
	
};

function nameFunction() {
	prompt('What is your name');
	 name = prompt.value;
	 console.log(name);
}

function radio() {
	x.play();
};

function stopRadio() {
	x.pause();
}


function openPage1() {
  window.open("https://codepen.io/Rogues/full/LMgWzV?fbclid=IwAR0vr6I48tUDGGO_X2eycf2LBybbohlC1_e5ePx8ho6Wd8WHoBJ8wyK7VtI", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=720,height=580");
}

function openPage2() {
  window.open("https://codepen.io/Rogues/full/wRYgKv", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=620,height=480");
}

function openPortfolio() {
  window.open("https://codepen.io/Dw-Develops/full/LMagOK", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=620,height=480");
}

function openPetsApp() {
  window.open("https://codepen.io/Dw-Develops/full/qLLpBy", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=620,height=480");
}