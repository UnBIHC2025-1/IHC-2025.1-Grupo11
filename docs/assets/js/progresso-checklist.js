document.addEventListener("DOMContentLoaded", function () {
  const grupos = [
    { classe: "check-gestao", titulo: "Gestão" },
    { classe: "check-design", titulo: "Design" },
    { classe: "check-desenvolvimento", titulo: "Desenvolvimento" },
    { classe: "check-conteudo", titulo: "Conteúdo" },
    { classe: "check-ferramentas", titulo: "Ferramentas" }
  ];

  const dados = grupos.map(grupo => {
    const caixas = document.querySelectorAll(`input[type="checkbox"].${grupo.classe}`);
    const total = caixas.length;
    const marcados = [...caixas].filter(c => c.checked).length;
    return {
      label: grupo.titulo,
      total,
      marcados
    };
  });

  const ctx = document.getElementById("graficoChecklist");
  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: dados.map(d => d.label),
        datasets: [
          {
            label: "Marcados",
            data: dados.map(d => d.marcados),
            backgroundColor: "rgba(54, 162, 235, 0.7)",
          },
          {
            label: "Total",
            data: dados.map(d => d.total),
            backgroundColor: "rgba(200, 200, 200, 0.3)",
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Progresso do Checklist de Acessibilidade'
          }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
});
