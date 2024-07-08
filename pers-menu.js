
let currentElement = null;
let currentWeapon = null;
let currentRarity = null; // Variable to store the selected rarity (5 or 4)

function filterCharacters() {
    let div = document.querySelectorAll('.bloco');
    
    for (let i = 0; i < div.length; i++) {
        let divs = div[i];
        let show = true;

        // Check for current element
        if (currentElement && !divs.classList.contains(currentElement)) {
            show = false;
        }

        // Check for current weapon
        if (currentWeapon && !divs.classList.contains(currentWeapon)) {
            show = false;
        }

        // Check for current rarity
        if (currentRarity && !divs.classList.contains(currentRarity)) {
            show = false;
        }

        divs.style.display = show ? 'block' : 'none';
    }
}

function elementos(name) {
    currentElement = (currentElement === name) ? null : name; // Reset if clicked again
    filterCharacters();
}

function armas(a) {
    currentWeapon = (currentWeapon === a) ? null : a; // Reset if clicked again
    filterCharacters();
}

function raridade(r) {
    if (currentRarity === r) {
        currentRarity = null; // Reset if clicked again
    } else {
        currentRarity = r; // Set the selected rarity
    }
    filterCharacters();
}

document.getElementById('pyro').onclick = function() {
    elementos('pyro');
}

document.getElementById('hydro').onclick = function() {
    elementos('hydro');
}

document.getElementById('geo').onclick = function() {
    elementos('geo');
}

document.getElementById('anemo').onclick = function() {
    elementos('anemo');
}

document.getElementById('cryo').onclick = function() {
    elementos('cryo');
}

document.getElementById('electro').onclick = function() {
    elementos('electro');
}

document.getElementById('dendro').onclick = function() {
    elementos('dendro');
}

document.getElementById('espada').onclick = function () {
    armas('espada');
}

document.getElementById('espadao').onclick = function () {
    armas('espadao');
}

document.getElementById('arco').onclick = function () {
    armas('arco');
}

document.getElementById('lança').onclick = function () {
    armas('lança');
}

document.getElementById('livro').onclick = function () {
    armas('livro');
}

document.getElementById('cinco').onclick = function() {
    raridade('cinco');
}

document.getElementById('quatro').onclick = function() {
    raridade('quatro');
}



