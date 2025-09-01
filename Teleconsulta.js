const ctx = document.getElementById('teleChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'],
    datasets: [{
      label: 'Consultas',
      data: [5, 9, 15, 12, 10, 8, 7, 5, 4],
      backgroundColor: '#1e88e5'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 2 } }
    }
  }
});
