# Desenvolvimento

Para garantir que nossos produtos digitais sejam acessíveis a todos, é fundamental que a equipe de desenvolvimento esteja bem preparada. Isso envolve saber como implementar recursos de acessibilidade, desde a fase de design até a codificação, e como verificar sua eficácia.

É crucial que a equipe tenha familiaridade com as ferramentas disponíveis no mercado para testes e padronizações de acessibilidade. Além disso, uma compreensão aprofundada de como pessoas com deficiência interagem com websites e aplicativos é essencial para criar experiências verdadeiramente inclusivas.

## Testes

Garantir a acessibilidade vai além do código; é preciso validar na prática. Testes manuais, e principalmente com pessoas com deficiência, são essenciais para confirmar que a experiência é verdadeiramente inclusiva.

- [ ] Foram realizados testes manuais de acessibilidade? [[11]](#ref11)
- [ ] Foram realizados testes com pessoas com deficiência? [[11]](#ref11)
- [ ] Todos os elementos da página são navegáveis apenas com teclado? [[13]](#ref13) [[11]](#ref11)
- [ ] Foram utilizados leitores de tela (ex.: NVDA, VoiceOver, JAWS) nos testes? [[1]](#ref1) [[11]](#ref11)
- [ ] A navegação em dispositivos móveis foi testada para garantir acessibilidade? [[15]](#ref15) [[11]](#ref11)
- [ ] Foram realizados testes de contraste de cores? [[5]](#ref5) [[11]](#ref11)
- [ ] O site foi testado em diferentes navegadores e sistemas operacionais? [[11]](#ref11)

## Código e Estrutura

A estrutura do seu código é a base para a acessibilidade. É através de um HTML bem organizado que as tecnologias assistivas conseguem interpretar e navegar pelo conteúdo da página.

### Imagens

Nenhuma informação visual pode ser perdida. O texto alternativo (alt) é a ponte que descreve o conteúdo de imagens para quem não pode vê-las.

- [ ] Todas as imagens relevantes possuem texto alternativo (``` alt ```) descritivo? [[1]](#ref1) [[11]](#ref11)
- [ ] As imagens decorativas possuem ``` alt="" ``` ou são inseridas via CSS? [[1]](#ref1) [[11]](#ref11)
- [ ] Nenhuma informação relevante está embutida dentro de imagens? [[1]](#ref1) [[11]](#ref11)
- [ ] Descrições longas são fornecidas no ```alt``` quando necessário (ex.: gráficos, imagens com texto)? [[1]](#ref1) [[11]](#ref11)
- [ ] Imagens complexas possuem descrição longa em local apropriado? [[1]](#ref1) [[11]](#ref11)

### Vídeos e Mídia

Conteúdos audiovisuais precisam de alternativas como legendas e transcrições. Dê ao usuário controle total sobre a reprodução para garantir uma experiência acessível e confortável.

- [ ] Todos os vídeos possuem legendas embutidas ou closed caption? [[2]](#ref2) [[11]](#ref11)
- [ ] Existe transcrição textual para conteúdos em áudio? [[1]](#ref1) [[11]](#ref11)
- [ ] Foi evitado o uso de conteúdos com flashes que possam causar convulsões? [[3]](#ref3) [[11]](#ref11)
- [ ] O ```autoplay``` de mídias está desabilitado por padrão? [[12]](#ref12) [[11]](#ref11)
- [ ] Possui pausa para todas as mídias? [[13]](#ref13) [[11]](#ref11)
- [ ] Possui ```type``` para botões e entradas? [[4]](#ref4) [[11]](#ref11)
- [ ] Vídeos possuem audiodescrição? [[2]](#ref2) [[11]](#ref11)
- [ ] Existe alternativa visual para áudios importantes? [[2]](#ref2) [[11]](#ref11)

### Controles e Navegação

A navegação deve ser clara e previsível para todos, especialmente para quem usa teclado. Controles lógicos e foco visível são a base para uma boa usabilidade.

- [ ] Todos os links possuem ``` href ``` correto? [[4]](#ref4) [[11]](#ref11)
- [ ] Links que abrem em nova guia ou nova janela estão claramente sinalizados? [[8]](#ref8) [[11]](#ref11)
- [ ] Todos os botões possuem funções semânticas corretas (```type="button"```, ```type="submit"```)? [[4]](#ref4) [[11]](#ref11)
- [ ] Foi implementada navegação por skip-link (atalho para conteúdo principal)? [[7]](#ref7) [[11]](#ref11)
- [ ] O foco do teclado é visível e lógico em toda a navegação? [[6]](#ref6) [[11]](#ref11)
- [ ] Links que abrem em uma nova guia ou janela estão identificados e indicados? [[8]](#ref8) [[11]](#ref11)
- [ ] Adicionar estados de foco em campos de entrada, botões, e elementos interativos. [[6]](#ref6) [[11]](#ref11)
- [ ] A navegação pode ser feita por teclado sem armadilhas de foco? [[13]](#ref13) [[11]](#ref11)
- [ ] O primeiro elemento focável permite ir diretamente para o conteúdo principal? [[7]](#ref7) [[11]](#ref11)

### Formulários

Formulários acessíveis precisam de rótulos claros e feedback de erro compreensível. Sem isso, a interação se torna uma barreira para muitos usuários.

- [ ] Todos os campos possuem ```label``` corretamente associados? [[9]](#ref9) [[11]](#ref11)
- [ ] Foram utilizados agrupadores como ```<fieldset>``` e ```<legend>``` quando necessário? [[4]](#ref4) [[11]](#ref11)
- [ ] Campos possuem ```autocomplete``` configurado? [[10]](#ref10) [[11]](#ref11)
- [ ] Campos de entrada possuem ```aria-describedby```? [[11]](#ref11)
- [ ] As mensagens de erro estão visíveis, com bom contraste e próximas aos campos? [[11]](#ref11)
- [ ] Há descrição clara para os erros e instruções de preenchimento? [[5]](#ref5) [[11]](#ref11)
- [ ] O formulário pode ser enviado usando apenas o teclado? [[13]](#ref13) [[11]](#ref11)
- [ ] Campos obrigatórios estão claramente indicados? [[11]](#ref11)

## Semântica e texto

O uso correto de tags HTML cria a estrutura lógica que guia os leitores de tela. Um texto claro e com tamanho ajustável garante a legibilidade para todos.

### Semântica

- [ ] O HTML possui marcação semântica (uso de ```header```, ```nav```, ```main```, ```footer```, ```article```, etc.)? [[4]](#ref4) [[11]](#ref11)
- [ ] A hierarquia dos títulos (```h1``` a ```h6```) segue uma ordem lógica e progressiva? [[17]](#ref17) [[11]](#ref11)
- [ ] Os rótulos, botões e links possuem textos claros e objetivos? [[4]](#ref4) [[11]](#ref11)
- [ ] Foram evitados nomes genéricos como "Clique aqui"? [[4]](#ref4) [[11]](#ref11)
- [ ] Tabelas são usadas apenas para dados tabulares, não para layout? [[4]](#ref4) [[11]](#ref11)

### Texto e Leitura

- [ ] Nenhum texto importante está embutido em imagens? [[1]](#ref1) [[11]](#ref11)
- [ ] É possível aumentar o zoom da página até 200% sem perda de conteúdo ou funcionalidade? [[16]](#ref16) [[11]](#ref11)
- [ ] O tamanho da fonte é relativo (ex.: ```em```, ```rem```) e não fixo (ex.: ```px```)? [[3]](#ref3) [[11]](#ref11)
- [ ] O texto possui contraste suficiente com o fundo? [[5]](#ref5) [[11]](#ref11)
- [ ] O texto não está em caixa alta, condensado ou justificado? [[11]](#ref11)

## Teclado e Acessibilidade Operacional

Tudo o que pode ser feito com um mouse deve ser possível usando apenas o teclado. Garanta uma navegação fluida, com foco sempre visível e sem "armadilhas".

- [ ] Toda a navegação da página pode ser feita usando apenas teclado? [[13]](#ref13) [[11]](#ref11)
- [ ] O primeiro elemento focável permite ir diretamente para o conteúdo principal? [[7]](#ref7) [[11]](#ref11)
- [ ] Foram evitadas armadilhas de foco (ex.: foco que não sai de um modal)? [[13]](#ref13) [[11]](#ref11)
- [ ] Existe suporte a atalhos de teclado (```TAB```, ```ESC```, etc.)? [[13]](#ref13) [[11]](#ref11)
- [ ] O foco é sempre visível (ex.: via CSS: ```:focus```, ```:hover```)? [[6]](#ref6) [[11]](#ref11)
- [ ] Quando se tem o mouseover é permitido o uso de teclado? [[11]](#ref11)

## Componentes e Elementos especiais

### Título

A hierarquia de títulos (h1 a h6) funciona como um índice para a página. Use-a de forma lógica para permitir que usuários de leitores de tela naveguem com eficiência.

- [ ] A hierarquia de conteúdo da página é definida por sua lógica, não pelo tamanho do texto? [[17]](#ref17) [[11]](#ref11)
- [ ] Use elementos de título ```h1 h2 h3``` para apresentar o conteúdo. [[17]](#ref17) [[11]](#ref11)
- [ ] Não pular níveis lógicos. [[17]](#ref17) [[11]](#ref11)
- [ ] Toda página contém um título ```h1``` descrevendo a página. [[17]](#ref17) [[19]](#ref19) [[11]](#ref11)

### Tabela

Tabelas devem ser usadas para dados, com a marcação correta para criar relação entre as informações. Isso transforma uma grade visual em conteúdo compreensível.

- [ ] Elementos em formato de tabela utilizam ```table```? [[4]](#ref4) [[11]](#ref11)
- [ ] Todas as tabelas usam ```thead```, ```tbody```, ```th``` e ```td``` corretamente? [[15]](#ref15) [[11]](#ref11)
- [ ] Foram aplicados ```scope="col"``` ou ```scope="row"``` quando necessário? [[15]](#ref15) [[11]](#ref11)
- [ ] Cada tabela possui uma legenda descritiva usando ```<caption>```? [[17]](#ref17) [[11]](#ref11)
- [ ] Tabelas não possuem células mescladas sem necessidade? [[11]](#ref11)

## Modais e Pop-ups

Modais devem gerenciar o foco do teclado de forma inteligente. Garanta que sejam fáceis de abrir, usar e fechar apenas com o teclado, sem prender o usuário.

- [ ] Modais são fáceis de fechar (ex.: com tecla ESC)? [[19]](#ref19) [[11]](#ref11)
- [ ] Não é possível abrir um modal dentro de outro modal (sem controle)? [[19]](#ref19) [[11]](#ref11)
- [ ] Modais não bloqueiam toda a tela (evitar fullscreen)? [[19]](#ref19) [[11]](#ref11)
- [ ] Existe foco correto no conteúdo quando o modal é aberto? [[19]](#ref19) [[11]](#ref11)
- [ ] A interação é uma tarefa simples? [[19]](#ref19) [[11]](#ref11)

### Dispositivos Móveis e tocáveis

Em telas de toque, áreas clicáveis devem ser grandes e bem espaçadas. O layout precisa se adaptar a qualquer orientação de tela sem perda de conteúdo.

- [ ] O site funciona corretamente em qualquer orientação (paisagem ou retrato)? [[14]](#ref14) [[15]](#ref15) [[11]](#ref11)
- [ ] A rolagem horizontal foi evitada? [[16]](#ref16) [[11]](#ref11)
- [ ] Botões e links possuem área de toque mínima de 44px por 44px (WCAG 2.5.7)? [[18]](#ref18) [[11]](#ref11)
- [ ] Há espaçamento suficiente entre elementos interativos? [[7]](#ref7) [[11]](#ref11)
- [ ] O layout é responsivo para diferentes tamanhos de tela? [[11]](#ref11)

### Ferramentas e Funcionalidades extras

Pequenos recursos como busca, breadcrumbs e CAPTCHAs acessíveis fazem uma grande diferença, aprimorando a usabilidade geral do seu site.

- [ ] É possível pausar, parar ou ocultar conteúdo em movimento? [[12]](#ref12) [[11]](#ref11)
- [ ] Breadcrumbs foram implementados para indicar a localização no site? [[11]](#ref11)
- [ ] Existe uma página de acessibilidade ou FAQ acessível? [[11]](#ref11)
- [ ] Áreas clicáveis seguem o tamanho mínimo de acessibilidade? [[18]](#ref18) [[11]](#ref11)
- [ ] Captchas oferecem alternativas acessíveis (ex.: captcha de áudio ou lógica simples)? [[11]](#ref11)
- [ ] Existe um campo de busca disponível e acessível? [[11]](#ref11)

## Referências Bibliográficas

<a id="ref1"></a>
> [1] WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). Acesso em: 9 Mai. 2024.

<a id="ref2"></a>
> [2] WCAG 2.2 Understanding Docs. SC 1.2.2 Captions (Prerecorded) (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html). Acesso em: 9 Mai. 2024.

<a id="ref3"></a>
> [3] WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

<a id="ref4"></a>
> [4] WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). Acesso em: 9 Mai. 2024.

<a id="ref5"></a>
> [5] WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Mai. 2024.

<a id="ref6"></a>
> [6] WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html). Acesso em: 9 Mai. 2024.

<a id="ref7"></a>
> [7] WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html). Acesso em: 9 Mai. 2024.

<a id="ref8"></a>
> [8] WCAG 2.2 Understanding Docs. G201 Giving users advanced warning when opening a new window. Disponível em: [https://www.w3.org/WAI/WCAG22/Techniques/general/G201](https://www.w3.org/WAI/WCAG22/Techniques/general/G201). Acesso em: 9 Mai. 2024.

<a id="ref9"></a>
> [9] WCAG 2.2 Understanding Docs. SC 3.2.2 On Input (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/on-input.html](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html). Acesso em: 9 Mai. 2024.

<a id="ref10"></a>
> [10] WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). Acesso em: 9 Mai. 2024.

<a id="ref11"></a>
> [11] ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf)

<a id="ref12"></a>
> [12] WCAG 2.2 Understanding Docs. SC 1.4.2 Audio Control (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html). Acesso em: 9 Mai. 2024.

<a id="ref13"></a>
> [13] WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html). Acesso em: 9 Mai. 2024.

<a id="ref14"></a>
> [14] WCAG 2.2 Understanding Docs. SC 1.3.4 Orientation (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/orientation.html](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html). Acesso em: 9 Mai. 2024.

<a id="ref15"></a>
> [15] WCAG 2.2 Understanding Docs. SC 4.1.1 Orientation (Level). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/parsing.html](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html). Acesso em: 9 Mai. 2024.

<a id="ref16"></a>
> [16] WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

<a id="ref17"></a>
> [17] WCAG 2.2 Understanding SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html). Acesso em: 9 Mai. 2024.

<a id="ref18"></a>
> [18] WCAG 2.2 Understanding Docs. SC 2.5.5 Target Size (Enhanced) (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

<a id="ref19"></a>
> [19] GUIA DE BOAS PRÁTICAS PARA ACESSIBILIDADE DIGITAL. Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

## Bibliografia

> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.