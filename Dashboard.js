document.addEventListener("DOMContentLoaded", function() {
  // Gráfico de barras - Consultas por dia da semana
  new Chart(document.getElementById("graficoConsultas"), {
    type: "bar",
    data: {
      labels: ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"],
      datasets: [{
        label: "Consultas",
        data: [20, 35, 30, 25, 40, 20, 15],
        backgroundColor: "#1d72e8"
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });

  // Gráfico de pizza - Ocupação de leitos
  new Chart(document.getElementById("graficoPizza"), {
    type: "pie",
    data: {
      labels: ["Ocupados", "Disponíveis"],
      datasets: [{
        data: [80, 20],
        backgroundColor: ["#1d72e8", "#e0e0e0"]
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: "right" } }
    }
  });

  // Gráfico de linha - Receitas mensais
  new Chart(document.getElementById("graficoReceitas"), {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Receitas",
        data: [60, 70, 65, 80, 90, 100],
        borderColor: "#1d72e8",
        backgroundColor: "#d0e4ff",
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
});
