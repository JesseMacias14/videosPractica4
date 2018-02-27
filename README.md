# LA SEÑORA NESBIT

Es un proyecto en el cual reflejamos algunas de las características principales que tiene el proyecto, que se encuentra enfocado principalmente al escribir código __html__, mejor conocido como __HiperText Markup Language__. Te invitamos a conocer un poco sobre este proyecto a continuación.

## Descripción General

Un documento donde encontramos diversas características en donde podemos encontrar las siguientes características.

Característica | Descripción | Cómo Funciona
--- | --- | ---
Reproductor | Consiste en mostrar en la ventana contenido audiovisual | Funciona con la etiqueta ```<video>```
Menú | Donde encontramos listados archivos multimedia disponibles para realizarse | Funciona con la etiqueta ```<figcaption>```
Imágenes | Muestra un previo del video a cargar | Funciona con la etiqueta ```<img>```
Loggeo | Permite iniciar sesión para así para almacenar la lista de reproducción | Funciona basado en JavaScript
Drag & Drop | Permite cargar un video en la ventana principal por medio del *arraste* de algún video de la lista | Funciona basado en JavaScript
Estilos | Nos ayuda a darle estética a la página completa | Funciona basado en Bootstrap
Navegador | Un contenedor donde podemos almacenar la información principal de la página | Funciona con la etiqueta ```<nav>```
Listas | Permite hacer un listado de información | Funciona con la etiqueta ```<ul><li>```

## Etiquetas

### Reproductor
```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>
```
### Menú
```html
<div>
    <figcaption>
        <a href="#" class="active">Home</a>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
    </figcaption>
</div>
```

### Imágenes
```html
<img src="smiley.gif" alt="Smiley face" height="42" width="42">
```

### Formularios
```html
<form action="/action_page.php">
    First name:
    <br>
        <input type="text" name="firstname" value="Mickey">
    <br>
    Last name:
    <br>
        <input type="text" name="lastname" value="Mouse">
    <br>
        <input type="submit" value="Submit">
</form> 
```

### Navegador
```html
<nav>
    <a href="/html/">HTML</a> |
    <a href="/css/">CSS</a> |
    <a href="/js/">JavaScript</a> |
    <a href="/jquery/">jQuery</a>
</nav>
```

### Listas
```html
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
```

## Mejoras Futuras

  * Menú desplegable en el Navegador
  * Agregar una sección especial para los comentarios por parte de los usuarios
  * Imagen de contacto

## Otras Notas

Si te interesa conocer si tu navegador soporta HTML5 y qué caracteristicas en particular, te recomendamos visitar el sitio [html5test](https://html5test.com), donde encontrarás las funcionalidades completas y si las soporta.


> Desarrollado por: Yesica I. Luevano Macias && Juan Yaír Ortiz Rivera
