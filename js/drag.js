function start(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover
    e.dataTransfer.setData("Data", e.target.id); // Coje el elemento que se va a mover
    e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
    e.target.style.opacity = '0.4'; // Establece la opacidad del elemento que se va arrastrar
}

function end(e) {
    e.target.style.opacity = ''; // Restaura la opacidad del elemento   
    e.dataTransfer.clearData("Data");
}
function over(event)
{
    var elemArrastrable = e.dataTransfer.getData("video"); //video que se esta arrastrando
    var id= e.target.id; //elemento sobre el que se esta arrastrando

    //poder soltar el elemento en el div de cuerpo
    if(id=='cuerpo')
    {
        return false; 
    }
}

function drop(e)
{
    var elemArrastrado= e.dataTransfer.getData("video");//elemento que se esta arrastrando
    e.target.appendChild(document.getElementById(elementoArrastrado)); //añade el video que se arrastro

    //dimensiones del elemento sobre el que se agrego
    xAux= $('#'+e.target.id).width();
    yAux=$('#'+e.target.id).height();

    //dimensiones del elemento arrastrado
    xelemto= $('#'+e.elemArrastrado).width();
    yelemto=$('#'+e.elemArrastrado).height();

    // Posicion del elemento sobre el que se arrastra
    posXCont = $(e.target).position().left;
    posYCont = $(e.target).position().top;

    // Posicion absoluta del raton
    x = e.layerX;
    y = e.layerY;

}
function clonar(e)
{
    var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data")); // Elemento arrastrado

    elementoArrastrado.style.opacity = ''; // Dejamos la opacidad a su estado anterior para copiar el elemento igual que era antes

    var movecarclone = elementoArrastrado.cloneNode(true); // Se clona el elemento
    movecarclone.id = "ElemClonado" + contador; // Se cambia el id porque tiene que ser unico
    contador += 1;
    elementoClonado.style.position = "static"; // Se posiciona de forma "normal" (Sino habria que cambiar las coordenadas de la posición) 
    e.target.appendChild(movecarclone); // Se añade el elemento clonado
}

function leave(e) {
    e.target.style.border = ''; 
}