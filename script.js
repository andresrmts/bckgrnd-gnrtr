var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function changeColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

changeColor();

function randomColor() {
	input1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	input2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	changeColor();
}

input1.addEventListener("input", changeColor);

input2.addEventListener("input", changeColor);

button.addEventListener("click", randomColor);