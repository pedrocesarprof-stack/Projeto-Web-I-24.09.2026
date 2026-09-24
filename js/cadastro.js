function cadastrar() {
    if (validar()) {
        console.log(document.getElementById("nome").value);
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("idade").value);
        console.log(document.getElementById("personagem").value);
        // exibir mensagem de sucesso
        const resultadoEl = document.getElementById("resultado");
        if (resultadoEl) resultadoEl.innerText = "Participante cadastrado com sucesso!";
    }
}

function validar() {
    // Validar Conteudo dos Campos
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let personagem = document.getElementById("personagem").value;
   
    // ler valor do radio 'dificuldade'
    let dificuldade = document.querySelector('input[name="dificuldade"]:checked')?.value || "";

    if (nome === "" || idade === "" || email === "" || personagem === "" || dificuldade === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Validar Idade
    if(idade < 10){
        alert("Idade mínima para participar é 10 anos.");
        return false
    }


    return true;
}