function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(Number(fano.value) == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')

    } else {
        var idade = ano - Number(fano.value)
        var fsex = document.querySelectorAll('input[type="radio"]');
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if( idade > 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'criança,masculina.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem,masculino.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto,masculino.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso,masculino.jpg')
            }


        } else if(fsex[1].checked){
            genero = 'Mulher'
            if( idade > 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'criança,feminina.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem.feminino.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto,feminino.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso,feminino.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}