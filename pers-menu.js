let star5 = document.getElementById('star-5')
let star4 = document.getElementById('star-4')


function cinco() {
    if(star5.style.display == 'none'){
        star5.style.display = 'flex'
        star4.style.display = 'none'
    } else {
        star4.style.display = 'none'
    }
}

function quatro() {
    if(star4.style.display == 'none'){
        star4.style.display = 'flex'
        star5.style.display = 'none'
    } else {
        star5.style.display = 'none'
    }
}

function elementos(name) {
    let div = document.querySelectorAll('.bloco')
 

for(let i = 0; i<div.length; i++) {
    let divs = div[i]
    if(divs.classList.contains(name)) {
         divs.style.display = 'block'
    } else {
        divs.style.display = 'none'
    }
} 
}

let pyro = document.getElementById('pyro').onclick = function() {
    elementos('pyro')
}

let hydro = document.getElementById('hydro').onclick = function() {
    elementos('hydro')
}

let geo = document.getElementById('geo').onclick = function() {
    elementos('geo')
}

let anemo = document.getElementById('anemo').onclick = function() {
    elementos('anemo')
}

let cyro = document.getElementById('cyro').onclick = function() {
    elementos('cyro')
}

let electro = document.getElementById('electro').onclick = function() {
    elementos('electro')
}

let dendro = document.getElementById('dendro').onclick = function() {
    elementos('dendro')
}

function armamento(armas) {
    let div = document.querySelectorAll('.bloco')
 

for(let i = 0; i<div.length; i++) {
    let divs = div[i]
    if(divs.classList.contains(armas)) {
         divs.style.display = 'block'
    } else {
        divs.style.display = 'none'
    }
} 
}

let espada = document.getElementById('espada').onclick = function () {
    armamento('espada')
}
let espadao = document.getElementById('espadao').onclick = function () {
    armamento('espadao')
}
let arco = document.getElementById('arco').onclick = function () {
    armamento('arco')
}
let lança = document.getElementById('lança').onclick = function () {
    armamento('lança')
}
let livro = document.getElementById('livro').onclick = function () {
    armamento('livro')
}




