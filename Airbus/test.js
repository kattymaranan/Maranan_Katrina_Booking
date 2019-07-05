var modal = document.getElementByID("myModal");

var btn = document.getElementByID("dl-btn");

var span = document.getElementByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = "block";
}

span.onclick = function(){
	modal.style.display="none";
}

window.onclick = function(event){
	if(event.target==modal){
		modal.style.display="none;"
	}
}