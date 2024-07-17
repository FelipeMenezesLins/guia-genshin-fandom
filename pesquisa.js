let barra = document.getElementById('pesquisa')
let lista = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','Ayaka', 'Albedo', 'Alhaitham', 'Aloy', 'Arlecchino', 'Ayato', 'Baizhu', 'Child', 'Chiori', 'Clorinde', 'Cyno', 'Dehya', 'Diluc', 'Eula', 'Furina', 'Ganyu', 'Hutao', 'Itto', 'Jean', 'Kazuha', 'Keqing', 'Klee', 'Kokomi', 'Lyney', 'Mona', 'Nahida', 'Navia', 'Neuvillette', 'Nilou', 'Qiqi', 'Raiden', 'Shenhe', 'Tighnari', 'Viajante', 'Venti', 'Wriothesley', 'Wanderer', 'Xianyun', 'Xiao', 'YaeMiko', 'Yelan', 'Yoimiya', 'Zhongli','Neu', 'Wr', 'Wrio', 'Andarilho', 'Xi', 'Yae', 'Miko', 'Yae Miko', 'Yo', 'Zhong', 'Shogun', 'Ei', 'Rai']
let personagens = document.querySelectorAll('.bloco')

/*
function pesquisou() {
    if(barra.value == '' || lista.indexOf(barra.value) == -1) {
        alert('Por favor preencha o campo de pesquisa, ou valor invalido!')
    } else {
       for(let i = 0; i < personagens.length; i++) {
       let divs = personagens[i]
       divs.classList.contains(lista)
       if(lista.indexOf(barra.value) > -1) {
         divs.style.background = 'black'
       }
       else {
        divs.style.background = 'green'
       }
      
       }
}
}
*/
function pesquisou() {
    let valorPesquisa = barra.value.toLowerCase();  // Convertendo o valor da barra de pesquisa para minúsculas
    let listaMinuscula = lista.map(nome => nome.toLowerCase());  // Convertendo todos os nomes da lista para minúsculas

    if (valorPesquisa == '' || listaMinuscula.indexOf(valorPesquisa) == -1) {
        alert('Por favor preencha o campo de pesquisa, ou valor inválido!');
    } else {
        for (let i = 0; i < personagens.length; i++) {
            let divs = personagens[i];
            let nomePersonagem = divs.className.toLowerCase();  // Convertendo o nome da classe do personagem para minúsculas

            if (nomePersonagem.includes(valorPesquisa)) {
                divs.style.display = 'block';
            } else {
                divs.style.display = 'none';
            }
        }
    }
}

// Adicionando um evento para acionar a função ao pressionar Enter na barra de pesquisa
barra.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        pesquisou();
    }
});