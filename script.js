// Pega o formulário pelo ID
const formulario = document.getElementById("formulario");


// Quando o usuário clicar em Enviar
formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();


    // Pega o nome e a data
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;


    // Respostas corretas
    const respostasCorretas = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "b",
        q5: "c",
        q6: "b",
        q7: "b",
        q8: "c",
        q9: "c",
        q10: "a"
    };


    // Começa com zero acertos
    let acertos = 0;

    // Começa com zero erros
    let erros = 0;


    // Verifica cada pergunta
    for (let pergunta in respostasCorretas) {

        // Procura a alternativa marcada
        const resposta = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );


        // Se o usuário respondeu
        if (resposta) {

            // Verifica se está correta
            if (resposta.value === respostasCorretas[pergunta]) {
                acertos++;
            } else {
                erros++;
            }

        } else {

            // Se não respondeu, conta como erro
            erros++;
        }
    }


    // Cria o conteúdo do arquivo TXT
    const texto =
`RESULTADO DO QUESTIONÁRIO
=========================

Nome: ${nome}
Data: ${data}

Total de questões: 10
Acertos: ${acertos}
Erros: ${erros}

Porcentagem de acertos: ${(acertos / 10) * 100}%
`;


    // Cria o arquivo TXT
    const arquivo = new Blob(
        [texto],
        { type: "text/plain" }
    );


    // Cria um endereço temporário para o arquivo
    const url = URL.createObjectURL(arquivo);


    // Cria um link para baixar o arquivo
    const link = document.createElement("a");

    link.href = url;

    link.download = "resultado-questionario.txt";


    // Faz o download automaticamente
    link.click();


    // Libera o endereço temporário
    URL.revokeObjectURL(url);


    // Mostra o resultado na tela
    alert(
        `Questionário enviado!\n\n` +
        `Nome: ${nome}\n` +
        `Acertos: ${acertos}\n` +
        `Erros: ${erros}`
    );

});


