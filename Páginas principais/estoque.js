

let botoesCompra = document.querySelectorAll(".botaoNovaGuia") ; 

botoesCompra.forEach(function(botao) {
    botao.addEventListener("click", function() {
        let novaJanela = window.open('formulario.html', '_blank', 'width=600,height=400');
        if(novaJanela) {
            novaJanela.focus(); 
        }
        else {
            alert("Não foi possível abrir a nova janela. Verifuqe as configurações do sistema e tente novamente.")
        }
    })
})