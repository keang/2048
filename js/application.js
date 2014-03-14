// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

function getDirections(){
	var code = document.getElementById("code").value;
	var directions = code.split(" ");
	return directions;
}

function runCode(){
	setInterval(function(){
    	manager.executeMove(getDirections());
    },300);
}
