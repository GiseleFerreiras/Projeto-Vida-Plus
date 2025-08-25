document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault(); //Impede envio do formulário 
  alert("Cadastrado com sucesso!");
  window.location.href = "login.html"; //Envia para a tela de login
});
