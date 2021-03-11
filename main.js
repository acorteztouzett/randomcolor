function create_color() {
    var random_color =(Math.floor(Math.random()*16777216)).toString(16);
    console.log(random_color)
    document.body.style.backgroundColor = "#" + random_color;
    var text = document.getElementById("text");
    text.innerText = "#" + random_color;
    document.getElementById("boton").style.backgroundColor= "#" + random_color;

}