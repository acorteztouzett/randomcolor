let randomColor;


function  create_color() {
    randomColor =(Math.floor(Math.random()*16777216)).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    let text = document.getElementById("text");
    text.innerText = "#" + randomColor;
    document.getElementById("boton").style.backgroundColor= "#" + randomColor;
}

function copy() {
    let copyText = document.getElementById("text");
    copyText.select();
    
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy")
    
}
