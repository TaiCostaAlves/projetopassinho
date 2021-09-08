var texto = document.getElementById ("digiteasuamensagem")
var caixa = document.getElementById ("caixa")
var escolha = document.getElementById ("escolha")
var deslocamento = document.getElementById ("numerodeslocamento")
var gerarcodif = document.getElementById ("botao")
var resultado = ""
var mensagemfinal = document.getElementById ("mensagemfinal")
var botaocodif = document.getElementById ("radio-codificar")
botaocodif.addEventListener("click", function () {
    gerarcodif.textContent="codificar mensagem"
} )
var botaodecodif = document.getElementById ("radio-decodificar")
botaodecodif.addEventListener("click", function () {
    gerarcodif.textContent="codificar mensagem"
} )
document.getElementById("botao").onclick= escolhaopcao;
function escolhaopcao (event){
    event.preventDefault ()
    var valorescolhido = escolha.value 
        if (valorescolhido=="cifra") {
                if (gerarcodif.textContent=="codificar mensagem"){
                    resultado = cifra(texto.value,deslocamento.value)
                    mensagemfinal.textContent=resultado
                }else {
                    resultado = descodificacifra(texto.value,deslocamento.value)
                    mensagemfinal.textContent=resultado
                }
        } else {
            if (gerarcodif.textContent=="codificar mensagem"){
                resultado = window.btoa(texto.value)
                mensagemfinal.textContent=resultado
            }else {
                resultado = window.atob(texto.value)
                mensagemfinal.textContent=resultado
            }
        }
        console.log(resultado)
}
function cifra(mensagem, deslocamento) {
    mensagem = mensagem.toLowerCase
    var mensagemcodificada =[] 
    var mensagemfinal = []
    var desloc = parseInt(deslocamento)
    for (var i=0; i<mensagem.length; i++) {
        if (mensagem[i]== " ") {
             mensagemcodificada.push(mensagem[i].charCodeAt)
        }else {
            mensagemcodificada.push((((mensagem[i].charCodeAt) + desloc - 97)%26)+97)
        }
    }
    for (var j=0; j<mensagemcodificada.length; j++){
        mensagemfinal.push(String.fromCharCode(mensagemcodificada[j]))
    }
    return mensagemfinal.join("")
}

function descodificacifra(mensagem, deslocamento) {
   mensagem = mensagem.toLowerCase 
    mensagem = mensagem.split("")
    var mensagemcodificada =[] 
    var mensagemfinal = []
    var desloc = parseInt(deslocamento)
    for (var i=0; i<mensagem.length; i++) {
        if (mensagem[i]== " ") {
             mensagemcodificada.push(mensagem[i].charCodeAt)
        }else {
            mensagemcodificada.push((((mensagem[i].charCodeAt) - desloc - 97)%26)+97)
        }
    }
    for (var j=0; j<mensagemcodificada.length; j++){
        mensagemfinal.push(String.fromCharCode(mensagemcodificada[j]))
    }
    return mensagemfinal.join("")
}
escolha.addEventListener("click",function desaparece(event){
    var valorselecionado=escolha.value 
    event.preventDefault ()
    if (valorselecionado=="base"){
        return caixa.style.display="none"
    } else {
        return caixa.style.disply = "block"
    }
})