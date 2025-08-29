document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const senha2 = document.getElementById("senha2").value;

  // Verifica se as senhas coincidem
  if (senha !== senha2) {
    alert("As senhas não coincidem!");
    return;
  }

  // Armazena dados no localStorage (simulação)
  localStorage.setItem("usuarioNome", nome);
  localStorage.setItem("usuarioEmail", email);

  // Mostra alerta de sucesso
  alert("Cadastrado com sucesso!");

  // Redireciona para tela de login
  window.location.href = "login.html";
});
