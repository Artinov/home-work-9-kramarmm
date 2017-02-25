var ball = document.querySelector(".discoball");

var ballClasses = ["here", "goes", "our", "awesome", "disco", "ball"];
i = ballClasses.length -1;
function goDisco() {
	ball.classList.remove(ballClasses[i+1]);
	ball.classList.add(ballClasses[i]);
	if(i>0){
	return --i;
	}else {
		return i = 5;
	}
}

setInterval(goDisco,300);