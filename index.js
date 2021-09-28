var texto = document.getElementById ("digiteasuamensagem")
var caixa = document.getElementById ("caixa")
var escolha = document.getElementById ("escolha")
var deslocamento = document.getElementById ("numerodeslocamento")
var gerarcodif = document.getElementById ("botao")
var resultado = ""
var mensagemfinal = document.getElementById ("mensagemfinal")
var botaocodif = document.getElementById ("radioCodificar")
botaocodif.addEventListener("click", function () {
    gerarcodif.textContent="codificar mensagem"
} )
var botaodecodif = document.getElementById ("radioDecodificar")
botaodecodif.addEventListener("click", function () {
    gerarcodif.textContent="decodificar mensagem"
} )
document.getElementById("botao").onclick= escolhaopcao;
function escolhaopcao (event){
    event.preventDefault ()
    var valorescolhido = escolha.value 
    
        if (valorescolhido=="cifra") {
                if (botaocodif.checked){
                    resultado = cifra(texto.value,deslocamento.value)
                    mensagemfinal.value=resultado
                    
                }else if(botaodecodif.checked) {
                    resultado = descodificacifra(texto.value,deslocamento.value)
                    mensagemfinal.value=resultado
                }
        } else {
            if (botaocodif.checked){
                resultado = window.btoa(texto.value)
                mensagemfinal.value=resultado
            }else if(botaodecodif.checked) {
                resultado = window.atob(texto.value)
                mensagemfinal.value=resultado
            }
        }
        
}
function cifra(mensagem, deslocamento) {
    mensagem = mensagem.toLowerCase()
    mensagem = mensagem.split("")
    var mensagemcodificada =[] 
    var mensagemfinal = []
    var desloc = parseInt(deslocamento)
    console.log(mensagem)
    for (var i=0; i<mensagem.length; i++) {
        var msg = mensagem[i].charCodeAt()
        if (mensagem[i]!= 32) {
            mensagemcodificada.push(((msg + desloc - 97)%26)+97)
            console.log(msg)
        }else {
            mensagemcodificada.push(mensagem[i].charCodeAt)
        }
    }
    for (var j=0; j<mensagemcodificada.length; j++){
        mensagemfinal.push(String.fromCharCode(mensagemcodificada[j]))
    }
    return mensagemfinal.join("")
}

function descodificacifra(mensagem, deslocamento) {
   mensagem = mensagem.toLowerCase()
    mensagem = mensagem.split("")
    var mensagemcodificada =[] 
    var mensagemfinal = []
   var desloc = parseInt(deslocamento)
    for (var i=0; i<mensagem.length; i++) {
        if (mensagem[i]== " ") {
             mensagemcodificada.push(mensagem[i].charCodeAt())
        }else if (((mensagem[i].charCodeAt())-97-desloc)>=0) { 
            mensagemcodificada.push((((mensagem[i].charCodeAt()) - desloc - 97)%26)+97)
        } else {
            mensagemcodificada.push((((mensagem[i].charCodeAt()) - desloc - 97)+26)+97)
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