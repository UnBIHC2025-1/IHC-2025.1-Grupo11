# Desenvolvimento

"Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, verificá-la e usar as ferramentas disponíveis no mercado para
testes e padronizações. Também é importante que a equipe saiba como as pessoas com deficiência usam os sítios web e aplicativos". Nesse caso, foram incluídas técnicas relacionadas ao desenvolvimento e também formas de verificar.

## Testes 
- [ ] Foram realizados testes manuais de acessibilidade?
- [ ] Foram realizados testes com pessoas com deficiência?
- [ ] Todos os elementos da página são navegáveis apenas com teclado?
- [ ] Foram utilizados leitores de tela (ex.: NVDA, VoiceOver, JAWS) nos testes?
- [ ] A navegação em dispositivos móveis foi testada para garantir acessibilidade?

## Código e Estrutura

### Imagens

- [ ] Todas as imagens relevantes possuem texto alternativo (``` alt ```)? <a id="TEC1" href="#RP1">[1]</a>
- [ ] As imagens decorativas possuem ``` alt="" ``` ou são inseridas via CSS? <a id="TEC1" href="#RP1">[1]</a>
- [ ] Nenhuma informação relevante está embutida dentro de imagens?
- [ ] Descrições longas são fornecidas no ```alt``` quando necessário (ex.: gráficos, imagens com texto)? <a id="TEC1" href="#RP1">[1]</a>

### Vídeos e Mídia

- [ ] Todos os vídeos possuem legendas embutidas ou closed caption? <a id="TEC2" href="#RP2">[2]</a>
- [ ] Existe transcrição textual para conteúdos em áudio? <a id="TEC1" href="#RP1">[1]</a>
- [ ] Foi evitado o uso de conteúdos com flashes que possam causar convulsões? <a id="TEC3" href="#RP3">[3]</a>
- [ ] O ```autoplay``` de mídias está desabilitado por padrão? <a id="TEC12" href="#RP12">[12]</a>
- [ ] Possui pausa para todas as mídias? <a id="TEC13" href="#RP13">[13]</a>
- [ ] Possui ```type``` para botões e entradas? <a id="TEC4" href="#RP4">[4]</a>

### Controles e Navegação

- [ ] Todos os links possuem ``` href ``` correto? <a id="TEC4" href="#RP4">[4]</a>  
- [ ] Links que abrem em nova guia ou nova janela estão claramente sinalizados (underline)? <a id="TEC5" href="#RP5">[5]</a>
- [ ] Todos os botões possuem funções semânticas corretas (```type="button"```, ```type="submit"```)? <a id="TEC4" href="#RP4">[4]</a>
- [ ] Foi implementada navegação por skip-link (atalho para conteúdo principal)? <a id="TEC7" href="#RP7">[7]</a>
- [ ] O foco do teclado é visível e lógico em toda a navegação?
- [ ] Links que abrem em uma nova guia ou janela estão identificados e indicados? <a id="TEC8" href="#RP8">[8]</a>
- [ ] <b> Adicionar estados de foco</b> em campos de entrada, botões, e elementos interativos. <a id="TEC6" href="#RP6">[6]</a>

### Formulários

- [ ] Todos os campos possuem ```label``` corretamente associados? <a id="TEC9" href="#RP9">[9]</a>
- [ ] Foram utilizados agrupadores como ```<fieldset>``` e ```<legend>``` quando necessário? <a id="TEC4" href="#RP4">[4]</a>
- [ ] Campos possuem ```autocomplete``` configurado? <a id="TEC10" href="#RP10">[10]</a>
- [ ] Campos de entrada possuem ```aria-describedby```? <a id="TEC11" href="#RP11">[11]</a>
- [ ] As mensagens de erro estão visíveis, com bom contraste e próximas aos campos? <a id="TEC11" href="#RP11">[11]</a>
- [ ] Há descrição clara para os erros e instruções de preenchimento? <a id="TEC5" href="#RP5">[5]</a>

## Semântica e texto

### Semântica
- [ ] O HTML possui marcação semântica (uso de ```header```, ```nav```, ```main```, ```footer```, ```article```, etc.)?
- [ ] A hierarquia dos títulos (```h1``` a ```h6```) segue uma ordem lógica e progressiva?
- [ ] Os rótulos, botões e links possuem textos claros e objetivos?
- [ ] Foram evitados nomes genéricos como "Clique aqui"?

### Texto e Leitura
- [ ] Nenhum texto importante está embutido em imagens?
- [ ] É possível aumentar o zoom da página até 200% sem perda de conteúdo ou funcionalidade?
- [ ] O tamanho da fonte é relativo (ex.: ```em```, ```rem```) e não fixo (ex.: ```px```)?

## Teclado e Acessibilidade Operacional

- [ ] Toda a navegação da página pode ser feita usando apenas teclado?
- [ ] O primeiro elemento focável permite ir diretamente para o conteúdo principal?
- [ ] Foram evitadas armadilhas de foco (ex.: foco que não sai de um modal)?
- [ ] Existe suporte a atalhos de teclado (```TAB```, ```ESC```, etc.)?
- [ ] O foco é sempre visível (ex.: via CSS: ```:focus```, ```:hover```)?
- [ ] Quando se tem o <b>mouseover é permitido o uso de teclado </b>?

## Componentes e Elementos especiais

### Título
- [ ] A <b>hierarquia</b> de conteúdo da página é definida por sua <b>lógica</b> não pelo tamanaho do texto? <a id="TEC17" href="#RP17">[17]</a>
- [ ] Use <b>elementos de título  ``` h1 h2 h3 ```</b> para apresentar o conteúdo.<a id="TEC17" href="#RP17">[17]</a>
- [ ] <b>Não pular níveis lógicos</b>.
- [ ] <b>Toda página contem um título  ``` h1 ```</b> descrevendo a página. <a id="TEC17" href="#RP17">[17]</a></b><a id="TEC19" href="#RP19">[19]</a>

### Tabela
- [ ] <b> Elementos em formato de tabela utilizam ``` table ```? </b>.  <a id="TEC4" href="#RP4">[4]</a>
- [ ] Todas as tabelas usam ```thead```, ```tbody```, ```th``` e ```td``` corretamente? <a id="TEC15" href="#RP15">[15]</a>
- [ ] Foram aplicados ```scope="col"``` ou ```scope="row"``` quando necessário?
- [ ] Cada tabela possui uma legenda descritiva usando ```<caption>```? <a id="TEC17" href="#RP17">[17]</a>

## Modais e Pop-ups
- [ ] Modais são fáceis de fechar (ex.: com tecla ESC)? <a id="TEC19" href="#RP19">[19]</a>
- [ ] Não é possível abrir um modal dentro de outro modal (sem controle)? <a id="TEC19" href="#RP19">[19]</a> 
- [ ] Modais não bloqueiam toda a tela (evitar fullscreen)? <a id="TEC19" href="#RP19">[19]</a>
- [ ] Existe foco correto no conteúdo quando o modal é aberto
- [ ] A interação é  uma <b> tarefa simples</b>?</b><a id="TEC19" href="#RP19">[19]</a>


### Dispositivos Móveis e tocáveis
- [ ] O site funciona corretamente em qualquer orientação (paisagem ou retrato)? <a id="TEC15" href="#RP15">[15]</a>
- [ ] A rolagem horizontal foi evitada? <a id="TEC16" href="#RP15">[16]</a>
- [ ] Botões e links possuem área de toque mínima de 44px por 44px (WCAG 2.5.7)? <a id="TEC18" href="#RP18">[18]</a>
- [ ] Há espaçamento suficiente entre elementos interativos? <a id="TEC7" href="#RP7">[7]</a>

### Ferramentas e Funcionalidades extras
- [ ] É possível pausar, parar ou ocultar conteúdo em movimento?
- [ ] Breadcrumbs foram implementados para indicar a localização no site?
- [ ] Existe uma página de acessibilidade ou FAQ acessível?
- [ ] Áreas clicáveis seguem o tamanho mínimo de acessibilidade?
- [ ] Captchas oferecem alternativas acessíveis (ex.: captcha de áudio ou lógica simples)?
- [ ] Existe um campo de busca disponível e acessível?

## Referência Bibliográfica

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A) . Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). Acesso em: 9 Mai. 2024.

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.2.2 Captions (Prerecorded) (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html). Acesso em: 9 Mai. 2024.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). Acesso em: 9 Mai. 2024.

> <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Mai. 2024.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html). Acesso em: 9 Mai. 2024.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html). Acesso em: 9 Mai. 2024.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. G201 Giving users advanced warning when opening a new window. Disponível em: [https://www.w3.org/WAI/WCAG22/Techniques/general/G201](https://www.w3.org/WAI/WCAG22/Techniques/general/G201). Acesso em: 9 Mai. 2024.

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 3.2.2 On Input (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/on-input.html](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html). Acesso em: 9 Mai. 2024.

> <a id="RP10" href="#TEC10">10.</a> WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). Acesso em: 9 Mai. 2024.

> <a id="RP11" href="#TEC11">11.</a> WCAG 2.2 Understanding Docs. SC 3.3.1 Error Identification (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html). Acesso em: 9 Mai. 2024.

> <a id="RP12" href="#TEC12">12.</a> WCAG 2.2 Understanding Docs. SC 1.4.2 Audio Control (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html). Acesso em: 9 Mai. 2024.

> <a id="RP13" href="#TEC13">13.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html). Acesso em: 9 Mai. 2024.

> <a id="RP14" href="#TEC14">14.</a> WCAG 2.2 Understanding Docs. SC 1.3.4 Orientation (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/orientation.html](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html). Acesso em: 9 Mai. 2024.

> <a id="RP15" href="#TEC15">15.</a> WCAG 2.2 Understanding Docs. SC 4.1.1 Orientation (Level). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/parsing.html](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html). Acesso em: 9 Mai. 2024.

> <a id="RP16" href="#TEC16">16.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

> <a id="RP17" href="#TEC17">17.</a> WCAG 2.2 Understanding SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html). Acesso em: 9 Mai. 2024.

> <a id="RP18" href="#TEC18">18.</a> WCAG 2.2 Understanding Docs. SC 2.5.5 Target Size (Enhanced) (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

> <a id="RP19" href="#TEC19">19.</a> GUIA DE BOAS PRÁTICAS PARA ACESSIBILIDADE DIGITAL. Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understandin/target-size-enhanced.html). Acesso em: 9 Mai. 2024.

## Bibliografia

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.