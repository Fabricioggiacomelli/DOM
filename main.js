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

function tocar() {
    const audioElement = document.getElementById('audio');
    audioElement.play();
}

function toggleClassButtons() {
    const buttons = document.querySelectorAll('#bt1, #bt2, #bt3');
    
    buttons.forEach(button => {
        button.classList.toggle('active');
    });
}

document.querySelector('.botão1').onclick = Texto  
document.querySelector(".botão2").onclick = img;
document.querySelector(".botão3").onclick = p;
document.querySelector(".botão4").onclick = tocar;
document.querySelector('.alterabotao').addEventListener("click", toggleClassButtons);
