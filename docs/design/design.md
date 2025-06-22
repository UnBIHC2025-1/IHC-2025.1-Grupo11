# Design

Existe um mito de que a acessibilidade torna um website excessivamente simplificado ou visualmente desagradável. Essa ideia está longe da verdade: um site bem estruturado pode ser tanto bonito quanto criativo. É perfeitamente possível, inclusive, desenvolver apresentações visuais distintas para a mesma estrutura HTML de um website, utilizando CSS, e assim atender a uma variedade de necessidades.

Nesta seção, você encontrará um checklist para garantir a acessibilidade no design do seu projeto.

## Concepção Visual e Design Universal
- [ ] O design foi pensado para ser utilizável por todas as pessoas, independentemente de suas limitações físicas, sensoriais ou cognitivas?
- [ ] Foram considerados usuários idosos, pessoas com deficiência e pessoas com baixo letramento digital no processo de design?
- [ ] Existem alternativas visuais, textuais e auditivas para os conteúdos?
- [ ] Informações e intruções não dependem exclusivamente de cor? <a id="TEC1" href="#RP1">[1]</a>
- [ ] Gráficos, mapas e diagramas possuem descrição ou legenda textual?

## Layout, Espaçamento e Legibilidade
- [ ] O layout permite aumento de fontes e modificação de contraste sem quebra ou sobreposição?
- [ ] As linhas de texto se ajustam à tela (viewport) e não exigem rolagem horizontal? <a id="TEC5"href="#RP5">[5]</a>
- [ ] Os parágrafos têm até 80 caracteres por linha para favorecer a leitura?
- [ ] O texto não está em caixa alta, condensado ou justificado?
- [ ] Evita o alinhamento justificado?
- [ ] O tamanho da fonte é ajustável sem perda de conteúdo? <a id="TEC2" href="#RP2">[2]</a>
- [ ] Elementos clicáveis possuem tamanho mínimo de 44px por 44px?
- [ ] Há espaçamento suficiente entre elementos interativos para evitar erros de toque, especialmente em dispositivos móveis?
- [ ] A navegação e a estrutura visual seguem uma hierarquia lógica e consistente (títulos, agrupamento de informações, menus)?
- [ ] As mensagens de erro, sucesso ou alerta aparecem próximas ao elemento correspondente e são visíveis?
- [ ] <b> As fontes são fluidas </b> e de fácil entendimento?
- [ ] <b> Garante que dicas visuais</b> significativas atinjam 3:1 em relação ao fundo? <a id="TEC4" href="#RP4">[4]</a>
- [ ] Toma o devido cuidado com <b>``` display:none ``` e ``` visibility:hidden ``` para os recursos de tecnologia assistiva</b>

## Animação
- [ ] Elementos piscando ou com flashes que possam causar desconforto (ex.: risco para pessoas com epilepsia) são evitados? <a id="TEC6" href="#RP6">[6]</a>
- [ ] O usuário consegue pausar, interromper ou desativar conteúdos animados ou em movimento? <a id="TEC7" href="#RP7">[7]</a>
- [ ] As animações respeitam as configurações de sistema do usuário, como ```prefers-reduced-motion```? <a id="TEC8" href="#RP8">[8]</a>

## Contraste de Cores
- [ ] O contraste do texto normal é de no mínimo 4.5:1? <a id="TEC9" href="#RP9">[9]</a>
- [ ] O contraste dos textos grandes (18px negrito ou 24px normal) é de no mínimo 3:1? <a id="TEC9" href="#RP9">[9]</a>
- [ ] Informações importantes (status, erros, instruções) são transmitidas sem depender apenas de cor? <a id="TEC4" href="#RP4">[4]</a>
- [ ] Ícones, bordas de campos, botões e outros elementos possuem contraste suficiente? <a id="#RP4" href="#RP4">[4]</a>
- [ ] O texto sobre imagens ou vídeos permanece legível? <a id="TEC9" href="#RP9">[9]</a>
- [ ] Foi testado o contraste de elementos de seleção (como :```:selection```)? <a id="TEC9" href="#RP9">[9]</a>
- [ ] O design oferece alternativas de contraste, como modo escuro, modo claro ou alto contraste?
- [ ] Cores foram escolhidas considerando usuários com daltonismo (ex.: evitar combinações como verde/vermelho ou azul/roxo)?
- [ ] Foi utilizada alguma ferramenta de verificação de contraste (ex.: WebAIM, Color Contrast Checker, Axe)?

## Feedback visual e Interatividade
- [ ] Existe foco visível nos elementos quando usam teclado (ex.: borda, sombra, cor)?
- [ ] Links estão destacados de forma clara (ex.: sublinhado, mudança de cor)?
- [ ] Quando um botão ou link é clicado, há feedback visual (ex.: mudança de cor, animação)?
- [ ] Controles como botões e links têm descrição textual clara e nomes, além de ícones? <a id="TEC3"href="#RP3">[3]</a>
- [ ] Foi evitado o uso de apenas ícones sem texto, principalmente em botões?

## Acessibilidade Mobile e Responsividade
- [ ] O layout é responsivo e se adapta corretamente a diferentes tamanhos de tela (celular, tablet, desktop)?
- [ ] O site funciona corretamente em orientação retrato e paisagem?
- [ ] Há rolagem horizontal desnecessária?
- [ ] Elementos interativos, menus e formulários funcionam de forma eficiente em telas sensíveis ao toque?
- [ ] Foram evitados elementos flutuantes, modais invasivos ou sobreposição que dificultem o uso em dispositivos móveis?
- [ ] Botões e links são facilmente acionáveis por toque, considerando áreas sensíveis grandes o suficiente?
- [ ] O espaçamento entre elementos previne erros de toque?

## Interface e Experiência (UX)
- [ ] A interface apresenta organização clara, com boa hierarquia visual e sem excesso de informações?
- [ ] Os elementos da interface (botões, campos, menus) são consistentes em todas as páginas?
- [ ] Existem opções para aumentar o tamanho da fonte?
- [ ] Existem opções para alterar o contraste ou ativar dark mode?
- [ ] O foco visual (borda, destaque) nos elementos interativos é evidente?
- [ ] Feedbacks visuais são claros (ex.: botões mudam de cor ao passar o mouse ou ao receber foco)?
- [ ] Mensagens de erro são claras, específicas e visualmente destacadas?


## Referências Bibliograficas

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Mai. 2024.

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). Acesso em: 9 Mai. 2024.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html). Acesso em: 9 Mai. 2024.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Acesso em: 9 Mai. 2024.

> <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Acesso em: 9 Mai. 2024.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Acesso em: 9 Mai. 2024.

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Acesso em: 9 Mai. 2024.

## Bibliografia

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.