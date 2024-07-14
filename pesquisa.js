let barra = document.getElementById('pesquisa')
let lista = ['Ayaka', 'maça']
let personagens = document.querySelectorAll('.bloco')


function pesquisou() {
    if(barra.value == '' || lista.indexOf(barra.value) == -1) {
        alert('Por favor preencha o campo de pesquisa, ou valor invalido!')
    } else {
       for(let i = 0; i < personagens.length; i++) {
       let divs = personagens[i]
       divs.classList.contains(lista)
       if(lista.indexOf(barra.value) > -1) {
         divs.style.display = 'none'
       }
       }
}
}