# Progresso

<canvas id="graficoChecklist" width="400" height="200"></canvas>


# Desenvolvimento

Para garantir que nossos produtos digitais sejam acessíveis a todos, é fundamental que a equipe de desenvolvimento esteja bem preparada. Isso envolve saber como implementar recursos de acessibilidade, desde a fase de design até a codificação, e como verificar sua eficácia.

É crucial que a equipe tenha familiaridade com as ferramentas disponíveis no mercado para testes e padronizações de acessibilidade. Além disso, uma compreensão aprofundada de como pessoas com deficiência interagem com websites e aplicativos é essencial para criar experiências verdadeiramente inclusivas.

## Testes

Garantir a acessibilidade vai além do código; é preciso validar na prática. Testes manuais, e principalmente com pessoas com deficiência, são essenciais para confirmar que a experiência é verdadeiramente inclusiva.

- [ ] <input type="checkbox" class="check-desenvolvimento"> Foram realizados testes manuais de acessibilidade? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foram realizados testes com pessoas com deficiência? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Todos os elementos da página são navegáveis apenas com teclado? [[12]](#ref12) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foram utilizados leitores de tela (ex.: NVDA, VoiceOver, JAWS) nos testes? [[1]](#ref1) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> A navegação em dispositivos móveis foi testada para garantir acessibilidade? [[14]](#ref14) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foram realizados testes de contraste de cores? [[5]](#ref5) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O site foi testado em diferentes navegadores e sistemas operacionais? [[NBR]](#refNBR)

## Código e Estrutura

A estrutura do seu código é a base para a acessibilidade. É através de um HTML bem organizado que as tecnologias assistivas conseguem interpretar e navegar pelo conteúdo da página.

### Imagens

Nenhuma informação visual pode ser perdida. O texto alternativo (alt) é a ponte que descreve o conteúdo de imagens para quem não pode vê-las.

- [ ] <input type="checkbox" class="check-desenvolvimento"> Todas as imagens relevantes possuem texto alternativo (``` alt ```) descritivo? [[1]](#ref1) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> As imagens decorativas possuem ``` alt="" ``` ou são inseridas via CSS? [[1]](#ref1) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Nenhuma informação relevante está embutida dentro de imagens? [[1]](#ref1) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Descrições longas são fornecidas no ```alt``` quando necessário (ex.: gráficos, imagens com texto)? [[1]](#ref1) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Imagens complexas possuem descrição longa em local apropriado? [[1]](#ref1) [[NBR]](#refNBR)

### Vídeos e Mídia

Conteúdos audiovisuais precisam de alternativas como legendas e transcrições. Dê ao usuário controle total sobre a reprodução para garantir uma experiência acessível e confortável.

- [ ] <input type="checkbox" class="check-desenvolvimento"> Todos os vídeos possuem legendas embutidas ou closed caption? [[2]](#ref2) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Existe transcrição textual para conteúdos em áudio? [[1]](#ref1) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foi evitado o uso de conteúdos com flashes que possam causar convulsões? [[3]](#ref3) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O ```autoplay``` de mídias está desabilitado por padrão? [[11]](#ref11) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Possui pausa para todas as mídias? [[12]](#ref12) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Possui ```type``` para botões e entradas? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Vídeos possuem audiodescrição? [[2]](#ref2) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Existe alternativa visual para áudios importantes? [[2]](#ref2) [[NBR]](#refNBR)

### Controles e Navegação

A navegação deve ser clara e previsível para todos, especialmente para quem usa teclado. Controles lógicos e foco visível são a base para uma boa usabilidade.

- [ ] <input type="checkbox" class="check-desenvolvimento"> Todos os links possuem ``` href ``` correto? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Links que abrem em nova guia ou nova janela estão claramente sinalizados? [[8]](#ref8) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Todos os botões possuem funções semânticas corretas (```type="button"```, ```type="submit"```)? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foi implementada navegação por skip-link (atalho para conteúdo principal)? [[7]](#ref7) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O foco do teclado é visível e lógico em toda a navegação? [[6]](#ref6) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Links que abrem em uma nova guia ou janela estão identificados e indicados? [[8]](#ref8) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Adicionar estados de foco em campos de entrada, botões, e elementos interativos. [[6]](#ref6) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> A navegação pode ser feita por teclado sem armadilhas de foco? [[12]](#ref12) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O primeiro elemento focável permite ir diretamente para o conteúdo principal? [[7]](#ref7) [[NBR]](#refNBR)

### Formulários

Formulários acessíveis precisam de rótulos claros e feedback de erro compreensível. Sem isso, a interação se torna uma barreira para muitos usuários.

- [ ] <input type="checkbox" class="check-desenvolvimento"> Todos os campos possuem ```label``` corretamente associados? [[9]](#ref9) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foram utilizados agrupadores como ```<fieldset>``` e ```<legend>``` quando necessário? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Campos possuem ```autocomplete``` configurado? [[10]](#ref10) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Campos de entrada possuem ```aria-describedby```? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> As mensagens de erro estão visíveis, com bom contraste e próximas aos campos? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Há descrição clara para os erros e instruções de preenchimento? [[5]](#ref5) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O formulário pode ser enviado usando apenas o teclado? [[12]](#ref12) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Campos obrigatórios estão claramente indicados? [[NBR]](#refNBR)

## Semântica e texto

O uso correto de tags HTML cria a estrutura lógica que guia os leitores de tela. Um texto claro e com tamanho ajustável garante a legibilidade para todos.

### Semântica

- [ ] <input type="checkbox" class="check-desenvolvimento"> O HTML possui marcação semântica (uso de ```header```, ```nav```, ```main```, ```footer```, ```article```, etc.)? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> A hierarquia dos títulos (```h1``` a ```h6```) segue uma ordem lógica e progressiva? [[16]](#ref16) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Os rótulos, botões e links possuem textos claros e objetivos? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foram evitados nomes genéricos como "Clique aqui"? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Tabelas são usadas apenas para dados tabulares, não para layout? [[4]](#ref4) [[NBR]](#refNBR)

### Texto e Leitura

- [ ] <input type="checkbox" class="check-desenvolvimento"> Nenhum texto importante está embutido em imagens? [[1]](#ref1) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> É possível aumentar o zoom da página até 200% sem perda de conteúdo ou funcionalidade? [[15]](#ref15) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O tamanho da fonte é relativo (ex.: ```em```, ```rem```) e não fixo (ex.: ```px```)? [[3]](#ref3) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O texto possui contraste suficiente com o fundo? [[5]](#ref5) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O texto não está em caixa alta, condensado ou justificado? [[NBR]](#refNBR)

## Teclado e Acessibilidade Operacional

Tudo o que pode ser feito com um mouse deve ser possível usando apenas o teclado. Garanta uma navegação fluida, com foco sempre visível e sem "armadilhas".

- [ ] <input type="checkbox" class="check-desenvolvimento"> Toda a navegação da página pode ser feita usando apenas teclado? [[12]](#ref12) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O primeiro elemento focável permite ir diretamente para o conteúdo principal? [[7]](#ref7) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foram evitadas armadilhas de foco (ex.: foco que não sai de um modal)? [[12]](#ref12) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Existe suporte a atalhos de teclado (```TAB```, ```ESC```, etc.)? [[12]](#ref12) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O foco é sempre visível (ex.: via CSS: ```:focus```, ```:hover```)? [[6]](#ref6) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Quando se tem o mouseover é permitido o uso de teclado? [[NBR]](#refNBR)

## Componentes e Elementos especiais

### Título

A hierarquia de títulos (h1 a h6) funciona como um índice para a página. Use-a de forma lógica para permitir que usuários de leitores de tela naveguem com eficiência.

- [ ] <input type="checkbox" class="check-desenvolvimento"> A hierarquia de conteúdo da página é definida por sua lógica, não pelo tamanho do texto? [[16]](#ref16) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Use elementos de título ```h1 h2 h3``` para apresentar o conteúdo. [[16]](#ref16) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Não pular níveis lógicos. [[16]](#ref16) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Toda página contém um título ```h1``` descrevendo a página. [[16]](#ref16) [[17]](#ref17) [[NBR]](#refNBR)

### Tabela

Tabelas devem ser usadas para dados, com a marcação correta para criar relação entre as informações. Isso transforma uma grade visual em conteúdo compreensível.

- [ ] <input type="checkbox" class="check-desenvolvimento"> Elementos em formato de tabela utilizam ```table```? [[4]](#ref4) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Todas as tabelas usam ```thead```, ```tbody```, ```th``` e ```td``` corretamente? [[14]](#ref14) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Foram aplicados ```scope="col"``` ou ```scope="row"``` quando necessário? [[14]](#ref14) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Cada tabela possui uma legenda descritiva usando ```<caption>```? [[16]](#ref16) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Tabelas não possuem células mescladas sem necessidade? [[NBR]](#refNBR)

## Modais e Pop-ups

Modais devem gerenciar o foco do teclado de forma inteligente. Garanta que sejam fáceis de abrir, usar e fechar apenas com o teclado, sem prender o usuário.

- [ ] <input type="checkbox" class="check-desenvolvimento"> Modais são fáceis de fechar (ex.: com tecla ESC)? [[17]](#ref17) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Não é possível abrir um modal dentro de outro modal (sem controle)? [[17]](#ref17) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Modais não bloqueiam toda a tela (evitar fullscreen)? [[17]](#ref17) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Existe foco correto no conteúdo quando o modal é aberto? [[17]](#ref17) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> A interação é uma tarefa simples? [[17]](#ref17) [[NBR]](#refNBR)

### Dispositivos Móveis e tocáveis

Em telas de toque, áreas clicáveis devem ser grandes e bem espaçadas. O layout precisa se adaptar a qualquer orientação de tela sem perda de conteúdo.

- [ ] <input type="checkbox" class="check-desenvolvimento"> O site funciona corretamente em qualquer orientação (paisagem ou retrato)? [[13]](#ref13) [[14]](#ref14) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> A rolagem horizontal foi evitada? [[15]](#ref15) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Botões e links possuem área de toque mínima de 44px por 44px (WCAG 2.5.7)? [[17]](#ref17) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Há espaçamento suficiente entre elementos interativos? [[7]](#ref7) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> O layout é responsivo para diferentes tamanhos de tela? [[NBR]](#refNBR)

### Ferramentas e Funcionalidades extras

Pequenos recursos como busca, breadcrumbs e CAPTCHAs acessíveis fazem uma grande diferença, aprimorando a usabilidade geral do seu site.

- [ ] <input type="checkbox" class="check-desenvolvimento"> É possível pausar, parar ou ocultar conteúdo em movimento? [[11]](#ref11) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Breadcrumbs foram implementados para indicar a localização no site? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Existe uma página de acessibilidade ou FAQ acessível? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Áreas clicáveis seguem o tamanho mínimo de acessibilidade? [[17]](#ref17) [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Captchas oferecem alternativas acessíveis (ex.: captcha de áudio ou lógica simples)? [[NBR]](#refNBR)
- [ ] <input type="checkbox" class="check-desenvolvimento"> Existe um campo de busca disponível e acessível? [[NBR]](#refNBR)

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
> [11] WCAG 2.2 Understanding Docs. SC 1.4.2 Audio Control (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html). Acesso em: 9 Mai. 2024.

<a id="ref12"></a>
> [12] WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html). Acesso em: 9 Mai. 2024.

<a id="ref13"></a>
> [13] WCAG 2.2 Understanding Docs. SC 1.3.4 Orientation (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/orientation.html](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html). Acesso em: 9 Mai. 2024.

<a id="ref14"></a>
> [14] WCAG 2.2 Understanding Docs. SC 4.1.1 Orientation (Level). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/parsing.html](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html). Acesso em: 9 Mai. 2024.

<a id="ref15"></a>
> [15] WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

<a id="ref16"></a>
> [16] WCAG 2.2 Understanding SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html). Acesso em: 9 Mai. 2024.

<a id="ref17"></a>
> [17] WCAG 2.2 Understanding Docs. SC 2.5.5 Target Size (Enhanced) (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

<a id="ref18"></a>
> [18] GUIA DE BOAS PRÁTICAS PARA ACESSIBILIDADE DIGITAL. Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

<a id="refNBR"></a>
> [NBR] ABNT NBR 16225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-16225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-16225-Acessibilidade-Digital.pdf)

## Bibliografia

> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.