function Texto() {
    document.querySelector('.Alterar').innerHTML = "Novo texto";    
}

function img() {
    document.querySelector('.gato').src = "dog.jpeg";
}

function p() {
    let x = document.querySelector('.p');
    x.style.color = "lightblue";
}


document.querySelector('.botão1').onclick = Texto  
document.querySelector(".botão2").onclick = img;
document.querySelector(".botão3").onclick = p;
