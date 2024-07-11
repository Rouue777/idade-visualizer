//Declarar variavei
let paragrafo = document.getElementById('paragrafoPrincipal')
let imagem = document.getElementById('image')
let inputAno = document.getElementById('ano')
let sexoF = document.getElementById('feminino')
let sexoM = document.getElementById('masculino')
let dataAtual = new Date()
let ano = dataAtual.getFullYear()
console.log(ano)

function verificar() {
    let anoDeNascimento = inputAno.value
    let idade = ano - anoDeNascimento

    if (sexoF.checked) {
        console.log('feminino selecionado')
        //iniciar condição baseada em idade
        if((idade >= 0) && (idade <= 5)){
            //entre 0 e 5
            paragrafo.textContent = `Detectamos uma menina com ${idade} anos`    
            imagem.src = 'https://pedagogiacomecaemcasa.com.br/wp-content/uploads/2023/07/Crianca-de-5-anos-conheca-os-comportamentos-tipicos-e-como-lidar-Pedagogia-Comeca-em-Casa-GS2-MKT-Digital.jpg'
        }else if((idade > 5) && (idade <= 10 )){
            //entre 6 e 10
            paragrafo.textContent = `Detectamos uma menina com ${idade} anos`
            imagem.src = 'https://soumamae.com.br/wp-content/uploads/2020/10/menina-bracos-cruzados-sorriso.jpg'
        }else if((idade > 10) && (idade <= 15)){
            //entre 11 e 15
            paragrafo.textContent = `Detectamos uma menina com ${idade} anos`
            imagem.src = 'https://viverbem.unimedbh.com.br/wp-content/uploads/2021/06/adolescencia-e-puberdade.png'
        }else if((idade > 15) && (idade <= 20)){
            //entre 16 e 20
            paragrafo.textContent = `Detectamos uma mulher com ${idade} anos`
            imagem.src = 'https://odia.ig.com.br/_midias/jpg/2021/05/20/1200x1920/1_img_20210520_wa0027-21959188.jpg'
        }else if((idade > 20) && (idade <= 30)){
            //entre 20 e 30
            paragrafo.textContent = `Detectamos uma mulher com ${idade} anos`
            imagem.src = 'https://moda20.com.br/wp-content/uploads/2023/07/Esta-es-la-crema-hidratante-Made-in-spain-con-niacinamida-prebioticos-y-acido-hialuronico-favorita-de-las-influencers.jpg'
        }else if((idade > 30) && (idade <= 40)){
            //entre 31 e 40   
            paragrafo.textContent = `Detectamos uma mulher com ${idade} anos`
            imagem.src = 'https://qph.cf2.quoracdn.net/main-qimg-92884bb89d918deea833cb53a7498e33-lq'
        }else if((idade > 40) && (idade <= 50)){
            //entre 41 e 50
            paragrafo.textContent = `Detectamos uma mulher com ${idade} anos`
            imagem.src = 'https://qph.cf2.quoracdn.net/main-qimg-3437720516e6b06bda84f738cae5df0d-lq'
        }else if((idade > 50) && (idade <= 60)){
            //entre 51 e 60
            paragrafo.textContent = `Detectamos uma mulher com ${idade} anos`
            imagem.src = 'https://files.sunoresearch.com.br/n/uploads/2021/01/1379bc39-whatsapp-image-2021-01-15-at-06.49.04-e1610704248710.jpeg'
        }else if((idade > 60) && (idade <= 75)){
            //entre 61 e 75  
             paragrafo.textContent = `Detectamos uma mulher com ${idade} anos`
             imagem.src = 'https://s2-quem.glbimg.com/0dw2_Aqo50Uh87dtz__y9FMJ1z8=/0x0:1400x1016/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/C/b/sFeb4LRKSxOE0WB0eXxw/nivea1.gif' 
        }else if((idade > 75) && (idade <= 120)){
            //entre 76 e 120
            paragrafo.textContent = `Detectamos uma mulher com ${idade} anos`
            imagem.src = 'https://s2-g1.glbimg.com/Ub-dQChZXQSG0qSZ0nj3qVYUkis=/0x0:1066x1120/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/U/D/Ft7v6KTuKQ0CkYYTSO9A/whatsapp-image-2022-02-19-at-09.26.19.jpeg'
        }else{
            //alert de dado invalido
            alert('Idade invalida (Cheque os dados e tente novamente)')
        } 
        
    } else if(sexoM.checked){
        console.log('masculino selecionado')
        if((idade >= 0) && (idade <= 5)){
            //entre 0 e 5
            paragrafo.textContent = `Detectamos um menino com ${idade} anos`
            imagem.src = 'https://www.portal27.com.br/wp-content/uploads/2022/04/Theo-Costa2.jpeg'
        }else if((idade > 5) && (idade <= 10 )){
            //entre 6 e 10
            paragrafo.textContent = `Detectamos um menino com ${idade} anos`
            imagem.src = 'https://s2-g1.glbimg.com/RSa3ApVHSdKISJWzrbq4SiGC-1I=/0x0:1276x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/3/wxQBqRQ7q6uoHmAwSDRA/whatsapp-image-2021-04-08-at-5.22.42-pm.jpeg'
        }else if((idade > 10) && (idade <= 15)){
            //entre 11 e 15
            paragrafo.textContent = `Detectamos um menino com ${idade} anos`
            imagem.src = 'https://i.pinimg.com/236x/be/d7/4e/bed74e1c91d58d51f248155da505dc17.jpg'
        }else if((idade > 15) && (idade <= 20)){
            //entre 16 e 20
            paragrafo.textContent = `Detectamos um homem com ${idade} anos`
            imagem.src = 'https://static.ndmais.com.br/2023/06/homem-de-35-anos-que-mais-parece-um-adolescente-de-15-anos-21062023111423035.jpeg'
        }else if((idade > 20) && (idade <= 30)){
            //entre 20 e 30
            paragrafo.textContent = `Detectamos um homem com ${idade} anos`
            imagem.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyIPU4PM2I0WwaqNSUsUaYGZ9TMiA2xbcLA&usqp=CAU'
        }else if((idade > 30) && (idade <= 40)){
            //entre 31 e 40
            paragrafo.textContent = `Detectamos um homem com ${idade} anos`
            imagem.src = 'https://blog.mensmarket.com.br/wp-content/uploads/2021/03/How-I-Met-Your-Mother-Photo_-Barney.jpg'   
        }else if((idade > 40) && (idade <= 50)){
            //entre 41 e 50
            paragrafo.textContent = `Detectamos um homem com ${idade} anos`
            imagem.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2Vzdy1SlI-RUrmUWhdmsFUP-W-9Ttj-sFban90j1B9Fvijmx4leRJfjF3Iz-wXQzXrdJgAD7ab218c3Zu_a8W1OYtop3nsfxC7px0yJnUIW6rZs1SdnJZ9NuCoMFbDFLhsJX3hANueRol/s1600/moda-masculina-acima-dos-40-anos-will-smith+%25283%2529.jpg'
        }else if((idade > 50) && (idade <= 60)){
            //entre 51 e 60
            paragrafo.textContent = `Detectamos um homem com ${idade} anos`
            imagem.src = 'https://thumbs.dreamstime.com/z/homem-de-cabelos-brancos-entre-e-anos-tocando-uma-m%C3%A3o-num-dia-ensolarado-cinzentos-jogando-%C3%A0-pr%C3%B3ximo-piscina-284068726.jpg'
        }else if((idade > 60) && (idade <= 75)){
            //entre 61 e 75 
            paragrafo.textContent = `Detectamos um homem com ${idade} anos`
            imagem.src = 'https://drpaulomaron.com.br/wp-content/uploads/2019/09/tamanho-normal-da-prostata-aos-70-anos-1.png'   
        }else if((idade > 75) && (idade <= 120)){
            //entre 76 e 120
            paragrafo.textContent = `Detectamos um homem com ${idade} anos`
            imagem.src = 'https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2021/05/pexels-chevanon-photography-2421934.jpg'
        }else{
            //alert de dado invalido
            alert('Idade invalida (Cheque os dados e tente novamente)')
        } 
    } else{ alert('Selecione um sexo ("cheque os dados e tente novamente")')

    }
    
}
