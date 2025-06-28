# Design

Existe um mito de que a acessibilidade torna um website excessivamente simplificado ou visualmente desagradável. Essa ideia está longe da verdade: um site bem estruturado pode ser tanto bonito quanto criativo. É perfeitamente possível, inclusive, desenvolver apresentações visuais distintas para a mesma estrutura HTML de um website, utilizando CSS, e assim atender a uma variedade de necessidades.

Nesta seção, você encontrará um checklist para garantir a acessibilidade no design do seu projeto.

---

## Concepção Visual e Design Universal

- [ ] O design foi pensado para ser utilizável por todas as pessoas, independentemente de suas limitações físicas, sensoriais ou cognitivas? *(NBR 17225 4.1 / 4.2)*
- [ ] Foram considerados usuários idosos, pessoas com deficiência e pessoas com baixo letramento digital no processo de design? *(NBR 17225 4.2 / 4.6)*
- [ ] Existem alternativas visuais, textuais e auditivas para os conteúdos? *(WCAG 2.2 SC 1.1.1 / NBR 17225 5.1)*
- [ ] Informações e instruções não dependem exclusivamente de cor? *(WCAG 2.2 SC 1.4.1 / NBR 17225 4.7.3)*
- [ ] Gráficos, mapas e diagramas possuem descrição ou legenda textual? *(WCAG 2.2 SC 1.1.1 / NBR 17225 5.1)*

---

## Layout, Espaçamento e Legibilidade

- [ ] O layout permite aumento de fontes e modificação de contraste sem quebra ou sobreposição? *(WCAG 2.2 SC 1.4.10 / NBR 17225 4.8.1)*
- [ ] As linhas de texto se ajustam à tela (viewport) e não exigem rolagem horizontal? *(WCAG 2.2 SC 1.4.10 / NBR 17225 4.8.1)*
- [ ] Os parágrafos têm até 80 caracteres por linha para favorecer a leitura? *(NBR 17225 4.8.3)*
- [ ] O texto não está em caixa alta, condensado ou justificado? *(NBR 17225 4.8.3)*
- [ ] O tamanho da fonte é ajustável sem perda de conteúdo? *(WCAG 2.2 SC 1.4.4 / NBR 17225 4.7.2)*
- [ ] Elementos clicáveis possuem tamanho mínimo de 44px por 44px? *(WCAG 2.2 SC 2.5.5 / NBR 17225 5.5.2)*
- [ ] Os elementos interativos possuem espaçamento adequado para evitar cliques acidentais? *(WCAG 2.2 SC 2.5.8 / NBR 17225 5.5.3)*
- [ ] A navegação e a estrutura visual seguem uma hierarquia lógica e consistente? *(WCAG 2.2 SC 1.3.1 / NBR 17225 5.2)*
- [ ] As mensagens de erro, sucesso ou alerta aparecem próximas ao elemento correspondente e são visíveis? *(WCAG 2.2 SC 3.3.1 / NBR 17225 5.3.2)*
- [ ] As fontes são fluidas e de fácil entendimento? *(NBR 17225 4.8.2)*
- [ ] Dicas visuais significativas atingem contraste mínimo de 3:1 com o fundo? *(WCAG 2.2 SC 1.4.11 / NBR 17225 4.7.4)*
- [ ] Evita o uso de `display:none` e `visibility:hidden` para informações essenciais? *(WCAG 2.2 SC 1.3.1 / NBR 17225 5.2)*

---

## Animações

- [ ] Existem elementos que piscam excessivamente ou com flashes (evitar mais de 3 por segundo)? *(WCAG 2.2 SC 2.3.1 / NBR 17225 4.9.1)*
- [ ] O usuário pode pausar, interromper ou ocultar conteúdos animados? *(WCAG 2.2 SC 2.2.2 / NBR 17225 4.9.1)*
- [ ] As animações respeitam a configuração de sistema `prefers-reduced-motion`? *(WCAG 2.2 SC 2.3.3 / NBR 17225 4.9.1)*
- [ ] Há opção explícita para desativar animações não essenciais? *(NBR 17225 4.9.2)*

---

## Contraste de Cores

- [ ] O contraste do texto normal é de no mínimo 4.5:1? *(WCAG 2.2 SC 1.4.3 / NBR 17225 4.7.1)*
- [ ] O contraste de textos grandes é de no mínimo 3:1? *(idem)*
- [ ] Informações importantes não dependem apenas de cor? *(WCAG 2.2 SC 1.4.1 / NBR 17225 4.7.3)*
- [ ] Botões, campos e ícones possuem contraste suficiente? *(WCAG 2.2 SC 1.4.11 / NBR 17225 4.7.4)*
- [ ] Texto sobre imagem ou vídeo permanece legível? *(WCAG 2.2 SC 1.4.3 / NBR 17225 4.7.1)*
- [ ] Elementos de seleção como `::selection` respeitam contraste? *(WCAG 2.2 SC 1.4.3)*
- [ ] Há opções de contraste alternativo (modo escuro, alto contraste)? *(NBR 17225 4.7.5)*
- [ ] Cores foram escolhidas considerando daltônicos? *(NBR 17225 4.7.3)*
- [ ] Foi usada ferramenta de verificação de contraste? *(Boas práticas WCAG / NBR 17225 Anexo A)*

---

## Feedback visual e Interatividade

- [ ] Existe foco visível nos elementos ao usar teclado? *(WCAG 2.2 SC 2.4.7 / NBR 17225 5.4.1)*
- [ ] Links têm destaque visual claro (ex.: sublinhado, cor)? *(WCAG 2.2 SC 1.4.1 / NBR 17225 4.7.3)*
- [ ] Botões mudam de cor ou estado ao serem clicados? *(WCAG 2.2 SC 1.4.13 / NBR 17225 5.5.1)*
- [ ] Mudanças de estado (hover, focus, active) são perceptíveis? *(WCAG 2.2 SC 1.4.13 / NBR 17225 5.5.1)*
- [ ] O primeiro foco do teclado permite pular direto para o conteúdo? *(WCAG 2.2 SC 2.4.1 / NBR 17225 5.4.3)*
- [ ] Botões e links são acompanhados de texto descritivo além do ícone? *(WCAG 2.2 SC 1.3.3 / NBR 17225 4.7.3)*
- [ ] Não há botões que utilizam somente ícones sem contexto textual? *(WCAG 2.2 SC 1.1.1 / NBR 17225 4.7.3)*

---

## Acessibilidade Mobile e Responsividade

- [ ] O layout é responsivo para diferentes tamanhos de tela? *(NBR 17225 5.5.2)*
- [ ] A orientação da tela (retrato/paisagem) é respeitada sem quebra de layout? *(WCAG 2.2 SC 1.3.4)*
- [ ] Evita rolagem horizontal desnecessária? *(WCAG 2.2 SC 1.4.10)*
- [ ] Todos os menus, formulários e interações funcionam com toque? *(NBR 17225 5.5.1)*
- [ ] Evita modais invasivos ou sobreposições que dificultem o toque? *(NBR 17225 5.5.3)*
- [ ] Áreas sensíveis ao toque têm tamanho adequado? *(WCAG 2.2 SC 2.5.7 / NBR 17225 5.5.2)*
- [ ] O espaçamento entre elementos evita erros de toque? *(WCAG 2.2 SC 2.5.8 / NBR 17225 5.5.3)*

---

## Interface e Experiência (UX)

- [ ] A estrutura visual apresenta hierarquia clara? *(WCAG 2.2 SC 1.3.1 / NBR 17225 5.2)*
- [ ] As informações mais importantes estão priorizadas visualmente? *(NBR 17225 4.7.1 / 5.2)*
- [ ] Componentes visuais são consistentes entre páginas? *(WCAG 2.2 SC 3.2.3 / NBR 17225 4.6)*
- [ ] Há opção para o usuário aumentar a fonte? *(WCAG 2.2 SC 1.4.4 / NBR 17225 4.7.2)*
- [ ] Existe controle de contraste (ex.: botão de modo escuro)? *(NBR 17225 4.7.5)*
- [ ] O foco visual está sempre evidente? *(WCAG 2.2 SC 2.4.7 / NBR 17225 5.4.1)*
- [ ] Feedbacks visuais (erro, sucesso, envio) são claros? *(WCAG 2.2 SC 3.3.1 / NBR 17225 5.3.2)*
- [ ] Mensagens são específicas, compreensíveis e próximas ao campo afetado? *(WCAG 2.2 SC 3.3.3 / NBR 17225 5.3.2)*

---

## Referências Bibliográficas

> [1] WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html. Acesso em: 15 Jun. 2025.

> [2] WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html. Acesso em: 15 Jun. 2025.

> [3] WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html. Acesso em: 15 Jun. 2025.

> [4] WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html. Acesso em: 15 Jun. 2025.

> [5] WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html. Acesso em: 15 Jun. 2025.

> [6] WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html. Acesso em: 15 Jun. 2025.

> [7] WCAG 2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html. Acesso em: 15 Jun. 2025.

> [8] WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html. Acesso em: 15 Jun. 2025.

> [9] WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA). Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html. Acesso em: 15 Jun. 2025.

> [10] ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf

## Bibliografia
> [1] DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf. Acesso em: 15 Jun. 2025.
