


function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dropEffect = "move";
}
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move" //move copy
}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

$(document).ready(function() {
    alert(localStorage.getItem('user'));
  });

$( ".login-boton" ).click(function() {
	
		if($("#inputEmail").val()==""){
			alert("Ingrese usuario")
		}else{
            localStorage.setItem('user', $("#inputEmail").val());
			location.reload();
		}	
	
});