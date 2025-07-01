/**
 * Salva o estado atual (marcado/desmarcado) de todos os checkboxes no localStorage.
 * Usa o ID de cada checkbox como chave.
 */
function salvarEstadoCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const estado = {};
  checkboxes.forEach(cb => {
    if (cb.id) { // Salva apenas checkboxes que têm um ID
      estado[cb.id] = cb.checked;
    }
  });
  // localStorage só armazena texto, então convertemos o objeto para uma string JSON
  localStorage.setItem('estadoChecklistProgresso', JSON.stringify(estado));
}

/**
 * Carrega o estado dos checkboxes a partir do localStorage e aplica na página.
 */
function carregarEstadoCheckboxes() {
  const estadoSalvo = localStorage.getItem('estadoChecklistProgresso');
  if (estadoSalvo) {
    const estado = JSON.parse(estadoSalvo); // Converte a string JSON de volta para um objeto
    Object.keys(estado).forEach(checkboxId => {
      const checkbox = document.getElementById(checkboxId);
      if (checkbox) {
        checkbox.checked = estado[checkboxId];
      }
    });
  }
}

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
  // 1. PRIMEIRO, carrega o estado salvo dos checkboxes do localStorage.
  carregarEstadoCheckboxes();

  const ctx = document.getElementById("graficoChecklist");
  if (!ctx) return;

  // 2. DEPOIS, gera os dados para o gráfico, que agora refletem o estado carregado.
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

  // 3. Adiciona um listener para cada checkbox.
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => {
      // Quando um checkbox muda, atualiza o gráfico E salva o novo estado geral.
      atualizarGrafico(chart);
      salvarEstadoCheckboxes();
    });
  });
});