document.getElementById("botaoEnviar").addEventListener("click", function(event) {

    event.preventDefault(); 

    exibirCarregamento();

    const nome = document.getElementById("name").value; 
    const email = document.getElementById("email").value; 
    const senha = document.getElementById("senha").value; 
    const confirmacaoSenha = document.getElementById("confirmacaoSenha").value; 

    setTimeout(function() {
        if (nome === "" || email === "" || senha === "" || confirmacaoSenha === "") {
            exibirModalErro();
        } else {
            exibirModalSucesso();
        }

        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("confirmacaoSenha").value = "";
    }, 3000); 
});

// Função que indicará se o usuário se cadastrou corretamente

function exibirModalSucesso() {
    document.getElementById("modal_titulo").innerHTML = "Usuário cadastrado com sucesso";
    document.getElementById("modal_titulo_div").className = "modal-header text-success"; 
    document.getElementById("modal_conteudo").innerHTML = "O usuário foi cadastrado com sucesso"; 
    document.getElementById("modal_btn").innerHTML = "Voltar"; 
    document.getElementById("modal_btn").className = "btn btn-success"; 
    $('#modalCadastroUsuario').modal('show'); 
}



function exibirModalErro() {
    document.getElementById("modal_titulo").innerHTML = "Usuário não cadastrado!"; 
    document.getElementById("modal_titulo_div").className = "modal-header text-danger"; 
    document.getElementById("modal_conteudo").innerHTML = "Verifique se todos os campos foram preenchidos e tente novamente"; 
    document.getElementById("modal_btn").innerHTML = "Voltar"; 
    document.getElementById("modal_btn").className = "btn btn-danger"; 
    $('#modalCadastroUsuario').modal('show'); 
}



function exibirCarregamento() {
    let loader = document.getElementById('loader');
    loader.style.display = 'block'; 

    setTimeout(function() {
        loader.style.display = 'none'; 
    }, 3000); 
}
