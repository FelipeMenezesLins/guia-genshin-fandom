let artefato = document.querySelectorAll('.art')
let div = document.querySelectorAll('.hi-dden')

let efeito = (img, index) => {
    img.addEventListener('mouseenter', () => {
        div[index].style.display = "block"
    })

    img.addEventListener('mouseleave', ()=> {
        div[index].style.display = "none"
    })
}

artefato.forEach((img,index) => {
    efeito(img, index)
})