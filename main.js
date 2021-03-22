let randomColor;


function  create_color() {
    randomColor =(Math.floor(Math.random()*16777216)).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    let text = document.getElementById("text");
    text.innerText = "#" + randomColor;
    document.getElementById("boton").style.backgroundColor= "#" + randomColor;
}

function copy(e) {
    let copyText = document.getElementById("text").innerHTML;
    const aux = document.createElement("input");
    aux.setAttribute("value", copyText);
    document.body.appendChild(aux)
    aux.select();
    document.execCommand("copy")
    document.body.removeChild(aux)

    //Le cambio el texto al boton para dar un indicativo de lo que se hizo
    const button= document.getElementById('boton2')
    button.innerHTML='Copied'
    setTimeout(()=>{
        button.innerHTML='Copy'

    },1000)
}
