let barra = document.getElementById('pesquisa')
let divs = document.querySelectorAll('.central')
let lista = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','Ayaka', 'Albedo', 'Alhaitham', 'Aloy', 'Arlecchino', 'Ayato', 'Baizhu', 'Child', 'Chiori', 'Clorinde', 'Cyno', 'Dehya', 'Diluc', 'Eula', 'Furina', 'Ganyu', 'Hutao', 'Itto', 'Jean', 'Kazuha', 'Keqing', 'Klee', 'Kokomi', 'Lyney', 'Mona', 'Nahida', 'Navia', 'Neuvillette', 'Nilou', 'Qiqi', 'Raiden', 'Shenhe', 'Tighnari', 'Viajante', 'Venti', 'Wriothesley', 'Wanderer', 'Xianyun', 'Xiao', 'YaeMiko', 'Yelan', 'Yoimiya', 'Zhongli','Neu', 'Wr', 'Wrio', 'Andarilho', 'Xi', 'Yae', 'Miko', 'Yae Miko', 'Yo', 'Zhong', 'Shogun', 'Ei', 'Rai', // 4estrelas
'kuki', 'shinobu', 'Xingqiu', 'Fischl']

function times() {
    let pesquisa = barra.value.toLowerCase()
    let lista2 = lista.map(nome => nome.toLowerCase())

    if(pesquisa == '' || lista2.indexOf(pesquisa) == -1) {
        alert('Valor invalido!')
    } else {
        for(let i = 0; i < divs.length; i++) {
            let pers = divs[i]
            let times = pers.className.toLowerCase()
            
            if(times.includes(pesquisa)) {
                pers.style.display = 'block'
            } else {
                pers.style.display = 'none'
            }
        }
    }
}


barra.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        times();
    }
});