// Captura o formulário
document.getElementById("formAgendamento").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita envio real

  // Mostra mensagem de sucesso
  alert("✅ Sua consulta foi agendada com sucesso!");

  // Aqui futuramente poderia enviar os dados para o backend
});

