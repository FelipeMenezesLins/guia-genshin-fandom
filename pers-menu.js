let star5 = document.getElementById('star-5')
let star4 = document.getElementById('star-4')
let fogo = document.getElementsByName('pyro')

function cinco() {
    if(star5.style.display == 'none'){
        star5.style.display = 'block'
        star4.style.display = 'none'
    } else {
        star4.style.display = 'none'
    }
}

function quatro() {
    if(star4.style.display == 'none'){
        star4.style.display = 'block'
        star5.style.display = 'none'
    } else {
        star5.style.display = 'none'
    }
}

function pyro() {
    
}