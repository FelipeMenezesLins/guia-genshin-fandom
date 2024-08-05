
let divs = document.querySelectorAll('.hidden') // localiza todas as divs que possui essa classe
let imagens = document.querySelectorAll('.opa')//localiza todas as imagens que possui essa classe

let add = (img, index) => { // uma variável que armazena uma arrow function com dois argumentos img e index
    img.addEventListener('mouseenter', ()=> { //uma variavel acessando um método que é um evento dom, dentro do paranteses tem o nome do evento que é mouseenter, uma arrow function q tem a função de mostrar div correspondente a imagem
        divs[index].style.display = "block"
    })
    img.addEventListener('mouseleave', ()=> {
        divs[index].style.display = "none"
    })
}

imagens.forEach((img, index) => { //Pra cada imagem que tiver a classe vai ser adicionado um evento dom q vai ter uma função que mostra a div correspondente a imagem, e vai ter um outro evento que vai apagar a div quando vc sair da imagem, a arrow function vai executar uma ação para cada elementos dentro da lista
    add(img, index)
})