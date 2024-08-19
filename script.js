
function enviar(){
    var conta = new Object();

    conta.nome = document.getElementById('nome').value;
    conta.sobrenome = document.getElementById('sobrenome').value;
    conta.data = document.getElementById('data').value;
    conta.email = document.getElementById('email').value;
    conta.numero = document.getElementById('numero').value;
    conta.cep = document.getElementById('cep').value;

    
    conta.bairro = document.getElementById('bairro').value;
    conta.cidade = document.getElementById('cidade').value;

  




    var myJSON = JSON.stringify(conta);

    console.log(conta.valueOf());
}




