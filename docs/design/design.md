# Design

Existe um mito de que a acessibilidade torna um website excessivamente simplificado ou visualmente desagradável. Essa ideia está longe da verdade: um site bem estruturado pode ser tanto bonito quanto criativo. É perfeitamente possível, inclusive, desenvolver apresentações visuais distintas para a mesma estrutura HTML de um website, utilizando CSS, e assim atender a uma variedade de necessidades.

Nesta seção, você encontrará um checklist para garantir a acessibilidade no design do seu projeto.

---

## Concepção Visual e Design Universal

- [ ] O design foi pensado para ser utilizável por todas as pessoas, independentemente de suas limitações físicas, sensoriais ou cognitivas? *(NBR 17225 4.1 / 4.2)* [10]
- [ ] Foram considerados usuários idosos, pessoas com deficiência e pessoas com baixo letramento digital no processo de design? *(NBR 17225 4.2 / 4.6)* [10]
- [ ] Existem alternativas visuais, textuais e auditivas para os conteúdos? *(WCAG 2.2 SC 1.1.1 / NBR 17225 5.1)* [2] [10]
- [ ] Informações e instruções não dependem exclusivamente de cor? *(WCAG 2.2 SC 1.4.1 / NBR 17225 4.7.3)*[1] [10]
- [ ] Gráficos, mapas e diagramas possuem descrição ou legenda textual? *(WCAG 2.2 SC 1.1.1 / NBR 17225 5.1)* [2] [10]

---

## Layout, Espaçamento e Legibilidade

- [ ] O layout permite aumento de fontes e modificação de contraste sem quebra ou sobreposição? [6] [11]
- [ ] As linhas de texto se ajustam à tela (viewport) e não exigem rolagem horizontal? [6] [11]
- [ ] Os parágrafos têm até 80 caracteres por linha para favorecer a leitura? [11]
- [ ] O texto não está em caixa alta, condensado ou justificado? [11]
- [ ] O tamanho da fonte é ajustável sem perda de conteúdo? [3] [11]
- [ ] Elementos clicáveis possuem tamanho mínimo de 44px por 44px? [11]
- [ ] Os elementos interativos possuem espaçamento adequado para evitar cliques acidentais? [11]
- [ ] A navegação e a estrutura visual seguem uma hierarquia lógica e consistente? [11]
- [ ] As mensagens de erro, sucesso ou alerta aparecem próximas ao elemento correspondente e são visíveis? [11]
- [ ] As fontes são fluidas e de fácil entendimento? [11]
- [ ] Dicas visuais significativas atingem contraste mínimo de 3:1 com o fundo? [5] [11]
- [ ] Evita o uso de `display:none` e `visibility:hidden` para informações essenciais? [11]

---

## Animações

- [ ] Existem elementos que piscam excessivamente ou com flashes (evitar mais de 3 por segundo)? [7] [11]
- [ ] O usuário pode pausar, interromper ou ocultar conteúdos animados? [8] [11]
- [ ] As animações respeitam a configuração de sistema `prefers-reduced-motion`? [9] [11]
- [ ] Há opção explícita para desativar animações não essenciais? [11]

---

## Contraste de Cores

- [ ] O contraste do texto normal é de no mínimo 4.5:1? [10] [11]
- [ ] O contraste de textos grandes é de no mínimo 3:1? [10] [11]
- [ ] Informações importantes não dependem apenas de cor? [1] [10] [11]
- [ ] Botões, campos e ícones possuem contraste suficiente? [5] [10] [11]
- [ ] Texto sobre imagem ou vídeo permanece legível? [10] [11]
- [ ] Elementos de seleção como `::selection` respeitam contraste? [10]
- [ ] Há opções de contraste alternativo (modo escuro, alto contraste)? [11]
- [ ] Cores foram escolhidas considerando daltônicos? [11]
- [ ] Foi usada ferramenta de verificação de contraste? [10] [11]

---

## Feedback visual e Interatividade

- [ ] Existe foco visível nos elementos ao usar teclado? [4] [10] [11]
- [ ] Links têm destaque visual claro (ex.: sublinhado, cor)? [1] [10] [11]
- [ ] Botões mudam de cor ou estado ao serem clicados? [5] [10] [11]
- [ ] Mudanças de estado (hover, focus, active) são perceptíveis? [5] [10] [11]
- [ ] O primeiro foco do teclado permite pular direto para o conteúdo? [10] [11]
- [ ] Botões e links são acompanhados de texto descritivo além do ícone? [2] [4] [11]
- [ ] Não há botões que utilizam somente ícones sem contexto textual? [2] [4] [11]

---

## Acessibilidade Mobile e Responsividade

- [ ] O layout é responsivo para diferentes tamanhos de tela? [11]
- [ ] A orientação da tela (retrato/paisagem) é respeitada sem quebra de layout? [6] [11]
- [ ] Evita rolagem horizontal desnecessária? [6] [11]
- [ ] Todos os menus, formulários e interações funcionam com toque? [11]
- [ ] Evita modais invasivos ou sobreposições que dificultem o toque? [11]
- [ ] Áreas sensíveis ao toque têm tamanho adequado? [6] [11]
- [ ] O espaçamento entre elementos evita erros de toque? [6] [11]

---

## Interface e Experiência (UX)

- [ ] A estrutura visual apresenta hierarquia clara? [3] [11]
- [ ] As informações mais importantes estão priorizadas visualmente? [11]
- [ ] Componentes visuais são consistentes entre páginas? [4] [11]
- [ ] Há opção para o usuário aumentar a fonte? [3] [11]
- [ ] Existe controle de contraste (ex.: botão de modo escuro)? [11]
- [ ] O foco visual está sempre evidente? [4] [11]
- [ ] Feedbacks visuais (erro, sucesso, envio) são claros? [5] [11]
- [ ] Mensagens são específicas, compreensíveis e próximas ao campo afetado? [5] [11]

---

## Referências Bibliográficas

> [1] WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html. Acesso em: 15 Jun. 2025.

> [2] WCAG 2.2 SC 1.1.1. Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html

> [3] WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html. Acesso em: 15 Jun. 2025.

> [4] WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html. Acesso em: 15 Jun. 2025.

> [5] WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html. Acesso em: 15 Jun. 2025.

> [6] WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html. Acesso em: 15 Jun. 2025.

> [7] WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html. Acesso em: 15 Jun. 2025.

> [8] WCAG 2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html. Acesso em: 15 Jun. 2025.

> [9] WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html. Acesso em: 15 Jun. 2025.

> [10] WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html. Acesso em: 15 Jun. 2025.

> [11] ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf

## Bibliografia
> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf. Acesso em: 15 Jun. 2025.
