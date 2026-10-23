# UniD — LMS Corporativo

Aplicação de gestão de aprendizagem feita só com **HTML, CSS e JavaScript puro**. Não precisa de instalação nem de build.

## Como abrir

- **Opção 1:** dê dois cliques em `index.html` para abrir no navegador.
- **Opção 2 (recomendada):** no VS Code, instale a extensão **Live Server**, clique com o botão direito em `index.html` e escolha **"Open with Live Server"**.

> A fonte Lexend vem do Google Fonts e precisa de internet. Sem conexão, o navegador usa uma fonte do sistema.

## Estrutura

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Layout, ícones SVG e as 4 telas (`<section>`) |
| `styles.css` | Variáveis de cor em `:root`, componentes e regras responsivas |
| `script.js` | Dados (array `cursos`), rotas por hash, filtros, renderização e localStorage |

## Rotas

`#/inicio` · `#/explore` · `#/aprender` · `#/certificacoes` · `#/curso/:id`

## Dicas

- **Sidebar Retrátil:** clique no botão de menu (três barras no topo) para alternar entre o menu expandido e o modo compacto (onde os ícones continuam visíveis e centralizados, com a marca UniD emoldurada em dourado).
- **Detalhes do Curso e Player:** clique em qualquer curso (como *Treinamento de Análise de Contratos* ou *Guia de Boas Práticas - Antifraude*) para acessar os detalhes com métricas, módulos, avaliação por estrelas e o **Player interativo** com tela de slides, controle de áudio e emissão de certificado.
- Ao concluir os slides no player, o curso atinge 100% de aproveitamento e o certificado é liberado em **Minhas certificações**.
- O progresso fica salvo no `localStorage`. Para voltar aos dados iniciais, use **avatar → Redefinir dados**.
