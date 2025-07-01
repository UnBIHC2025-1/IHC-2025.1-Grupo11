function contarCheckboxPorClasse(classe) {
  const checkboxes = document.querySelectorAll(`input[type="checkbox"].${classe}`);
  const marcados = [...checkboxes].filter(cb => cb.checked).length;
  return { total: checkboxes.length, marcados };
}

function gerarDados() {
  const grupos = [
    { classe: "check-gestao", titulo: "Gestão" },
    { classe: "check-design", titulo: "Design" },
    { classe: "check-desenvolvimento", titulo: "Desenvolvimento" },
    { classe: "check-conteudo", titulo: "Conteúdo" },
    { classe: "check-ferramentas", titulo: "Ferramentas" }
  ];

  return grupos.map(g => {
    const resultado = contarCheckboxPorClasse(g.classe);
    return {
      label: g.titulo,
      total: resultado.total,
      marcados: resultado.marcados
    };
  });
}

function atualizarGrafico(chart) {
  const dados = gerarDados();
  chart.data.datasets[0].data = dados.map(d => d.marcados);
  chart.data.datasets[1].data = dados.map(d => d.total);
  chart.update();
}

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("graficoChecklist");

  if (!ctx) return;

  const dados = gerarDados();

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dados.map(d => d.label),
      datasets: [
        {
          label: "Marcados",
          data: dados.map(d => d.marcados),
          backgroundColor: "rgba(54, 162, 235, 0.7)"
        },
        {
          label: "Total",
          data: dados.map(d => d.total),
          backgroundColor: "rgba(200, 200, 200, 0.3)"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Progresso do Checklist de Acessibilidade"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          stepSize: 1
        }
      }
    }
  });

  // 🟢 Atualiza o gráfico sempre que qualquer checkbox for clicado
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => atualizarGrafico(chart));
  });
});
