// Função interativa para o Quiz de Cidadania Digital
function verificarResposta(eCorreta) {
    const resultado = document.getElementById("resultado-quiz");
    
    if (eCorreta) {
        resultado.innerText = "Parabéns! 🎉 Você agiu como um cidadão digital consciente. Sempre cheque os fatos antes de acreditar.";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Cuidado! ❌ Compartilhar sem checar ajuda a espalhar desinformação e golpes. Sempre desconfie!";
        resultado.style.color = "red";
    }
}
