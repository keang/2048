var manager;
var interval;
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

function getDirections(){
	var code = document.getElementById("code").value;
	var directions = code.split("");
	var dir = [];
	for(var i=0; i<directions.length; i++){
		if(directions[i]=='u')
			dir[i] = 0;
		else if (directions[i]=='r')
			dir[i] = 1;
		else if (directions[i]=='d')
			dir[i] = 2;
		else if (directions[i]=='l')
			dir[i] = 3;
		//console.log(dir[i])//convert to 1, 2, 3, 4
	}
	return dir;
}

function runCode(){
	var d = getDirections();
	manager.executeMove(d);
	interval = setInterval(function(){
    	manager.executeMove(d);
    },200*d.length);
}

function stopCode(){
	clearInterval(interval);
}
