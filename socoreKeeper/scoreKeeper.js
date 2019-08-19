var h1 = document.querySelector("h1");
var p1 = document.querySelector("#p1");
var	p2 = document.querySelector("#p2");
var res = document.querySelector("#res");
var p1s = document.querySelector("#p1s");
var p2s = document.querySelector("#p2s");
var gametime = 5;
var p1score = 0;
var p2score = 0;
var gameover = false;
var input = document.querySelector("input")
var gt = document.querySelector("#gt")

p1.addEventListener("click",function(){
	if (!gameover) {
		p1score ++;
		p1s.textContent = p1score;
		if (p1score == gametime) {
			p1s.style.color = "green"
			gameover = true;
		}

	}
})
p2.addEventListener("click",function(){
	if (!gameover) {
		p2score ++;
		p2s.textContent = p2score;
		if (p2score == gametime) {
			p2s.style.color = "green"
			gameover = true;
		}

	}
})
res.addEventListener("click",function(){
	reset();
})
function reset(){
	p1score = 0;
	p2score = 0;
	p1s.textContent = 0;
	p2s.textContent = 0;
	p1s.style.color = "black";
	p2s.style.color = "black";
	gameover = false;
}

input.addEventListener("change", function() {
	// body...
	gt.textContent = input.value;
	gametime = input.value;
	reset();

})