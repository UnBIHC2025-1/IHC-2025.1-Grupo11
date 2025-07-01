# Progresso

<canvas id="graficoChecklist" width="400" height="200"></canvas>

# Design

Existe um mito de que a acessibilidade torna um website excessivamente simplificado ou visualmente desagradável. Essa ideia está longe da verdade: um site bem estruturado pode ser tanto bonito quanto criativo. É perfeitamente possível, inclusive, desenvolver apresentações visuais distintas para a mesma estrutura HTML de um website, utilizando CSS, e assim atender a uma variedade de necessidades.

Nesta seção, você encontrará um checklist para garantir a acessibilidade no design do seu projeto.

---

## Concepção Visual e Design Universal

- [ ] <input type="checkbox" class="check-design"> O design foi pensado para ser utilizável por todas as pessoas, independentemente de suas limitações físicas, sensoriais ou cognitivas? [[10]](#ref10)
- [ ] <input type="checkbox" class="check-design"> Foram considerados usuários idosos, pessoas com deficiência e pessoas com baixo letramento digital no processo de design? [[10]](#ref10)
- [ ] <input type="checkbox" class="check-design"> Existem alternativas visuais, textuais e auditivas para os conteúdos? [[2]](#ref2) [[10]](#ref10)
- [ ] <input type="checkbox" class="check-design"> Informações e instruções não dependem exclusivamente de cor? [[1]](#ref1) [[10]](#ref10)
- [ ] <input type="checkbox" class="check-design"> Gráficos, mapas e diagramas possuem descrição ou legenda textual? [[2]](#ref2) [[10]](#ref10)

---

## Layout, Espaçamento e Legibilidade

- [ ] <input type="checkbox" class="check-design"> O layout permite aumento de fontes e modificação de contraste sem quebra ou sobreposição? [[6]](#ref6) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> As linhas de texto se ajustam à tela (viewport) e não exigem rolagem horizontal? [[6]](#ref6) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Os parágrafos têm até 80 caracteres por linha para favorecer a leitura? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> O texto não está em caixa alta, condensado ou justificado? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> O tamanho da fonte é ajustável sem perda de conteúdo? [[3]](#ref3) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Elementos clicáveis possuem tamanho mínimo de 44px por 44px? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Os elementos interativos possuem espaçamento adequado para evitar cliques acidentais? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> A navegação e a estrutura visual seguem uma hierarquia lógica e consistente? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> As mensagens de erro, sucesso ou alerta aparecem próximas ao elemento correspondente e são visíveis? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> As fontes são fluidas e de fácil entendimento? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Dicas visuais significativas atingem contraste mínimo de 3:1 com o fundo? [[5]](#ref5) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Evita o uso de `display:none` e `visibility:hidden` para informações essenciais? [[NBR]](#refNBR)

---

## Animações

- [ ] <input type="checkbox" class="check-design"> Existem elementos que piscam excessivamente ou com flashes (evitar mais de 3 por segundo)? [[7]](#ref7) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> O usuário pode pausar, interromper ou ocultar conteúdos animados? [[8]](#ref8) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> As animações respeitam a configuração de sistema `prefers-reduced-motion`? [[9]](#ref9) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Há opção explícita para desativar animações não essenciais? [[NBR]](#refNBR)

---

## Contraste de Cores

- [ ] <input type="checkbox" class="check-design"> O contraste do texto normal é de no mínimo 4.5:1? [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> O contraste de textos grandes é de no mínimo 3:1? [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Informações importantes não dependem apenas de cor? [[1]](#ref1) [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Botões, campos e ícones possuem contraste suficiente? [[5]](#ref5) [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Texto sobre imagem ou vídeo permanece legível? [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Elementos de seleção como `::selection` respeitam contraste? [[10]](#ref10)
- [ ] <input type="checkbox" class="check-design"> Há opções de contraste alternativo (modo escuro, alto contraste)? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Cores foram escolhidas considerando daltônicos? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Foi usada ferramenta de verificação de contraste? [10] [NBR]

---

## Feedback visual e Interatividade

- [ ] <input type="checkbox" class="check-design"> Existe foco visível nos elementos ao usar teclado? [[4]](#ref4) [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Links têm destaque visual claro (ex.: sublinhado, cor)? [[1]](#ref1) [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Botões mudam de cor ou estado ao serem clicados? [[5]](#ref5) [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Mudanças de estado (hover, focus, active) são perceptíveis? [[5]](#ref5) [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> O primeiro foco do teclado permite pular direto para o conteúdo? [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Botões e links são acompanhados de texto descritivo além do ícone? [[2]](#ref2) [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Não há botões que utilizam somente ícones sem contexto textual? [[2]](#ref2) [[4]](#ref4) [[NBR]](#refNBR)

---

## Acessibilidade Mobile e Responsividade

- [ ] <input type="checkbox" class="check-design"> O layout é responsivo para diferentes tamanhos de tela? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> A orientação da tela (retrato/paisagem) é respeitada sem quebra de layout? [[6]](#ref6) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Evita rolagem horizontal desnecessária? [[6]](#ref6) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Todos os menus, formulários e interações funcionam com toque? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Evita modais invasivos ou sobreposições que dificultem o toque? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Áreas sensíveis ao toque têm tamanho adequado? [[6]](#ref6) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> O espaçamento entre elementos evita erros de toque? [[6]](#ref6) [[NBR]](#refNBR)

---

## Interface e Experiência (UX)

- [ ] <input type="checkbox" class="check-design"> A estrutura visual apresenta hierarquia clara? [[3]](#ref3) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> As informações mais importantes estão priorizadas visualmente? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Componentes visuais são consistentes entre páginas? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Há opção para o usuário aumentar a fonte? [[3]](#ref3) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Existe controle de contraste (ex.: botão de modo escuro)? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> O foco visual está sempre evidente? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Feedbacks visuais (erro, sucesso, envio) são claros? [[5]](#ref5) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-design"> Mensagens são específicas, compreensíveis e próximas ao campo afetado? [[5]](#ref5)

---

## Referências Bibliográficas

<a id="ref1"></a>
> [1] WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 15 Jun. 2025.

<a id="ref2"></a>
> [2] WCAG 2.2 SC 1.1.1. Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html).

<a id="ref3"></a>
> [3] WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). Acesso em: 15 Jun. 2025.

<a id="ref4"></a>
> [4] WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html). Acesso em: 15 Jun. 2025.

<a id="ref5"></a>
> [5] WCAG 2.2 Understanding Docs. SC 1.4.NBR Non-text Contrast (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Acesso em: 15 Jun. 2025.

<a id="ref6"></a>
> [6] WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 15 Jun. 2025.

<a id="ref7"></a>
> [7] WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 15 Jun. 2025.

<a id="ref8"></a>
> [8] WCAG 2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Acesso em: 15 Jun. 2025.

<a id="ref9"></a>
> [9] WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Acesso em: 15 Jun. 2025.

<a id="ref10"></a>
> [10] WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Acesso em: 15 Jun. 2025.

<a id="refNBR"></a>
> [NBR] ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf)

## Bibliografia
> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 15 Jun. 2025.