# Desafio: Consulta Processual

Olá! Bem vindo ao Busca Jurídica, siga as instruções abaixo para execução:

Linguagem: JavaScript

Frameworks: React.JS e Node.JS (+Express)

Testes: Jest (unit) e Cypress (e2e)


## 1. Getting Started

Para começar, rode:

`npm run dev`

**O site estará rodando em `http://localhost:3000/`**

Para rodar os testes unitários do front-end, por favor rode em um segundo terminal:

`cd ./client`

`npm run test`


Para rodar o testes e2e cypress, por favor rode neste mesmo segundo terminal, dentro da pasta client e com o front-end e o back-end rodando simultaneamente:

`npx cypress run`
   

## 2. Overview

O projeto consiste em duas pastas, uma pro server side feita em Node.JS e Express e uma pro client side feito em React.JS. No front-end, a arquitetura é separada dentro de `src` entre components e pages onde ficam os componentes e páginas do projeto respectivamente. Foram implementadas 3 páginas:

 1. A home onde consta o formulário
 2. A página de Região Tribunal(TrRegion) onde consta todos os processos de uma determinada região
 3. A página de Processo(LawSuit) onde consta todos os detalhes de um processo específico

Na home o usuário tem a opção de buscar por número de CNJ de um processo ou por uma região específica para achar todos os processos dessa região, ficando a outra opção bloqueada enquanto o usuário utiliza uma dessas opções. O usuário pode também refazer a operação de busca em qualquer outra página com a partir do Header da página.

Testes unitários são realizados nos componentes `LawSuitDetails`, `Movements` e `SearchBar` de forma garantir o funcionamento ideal deles e também nas páginas `LawSuit` e `TrRegion`. O fluxo de erros e bloqueios do form é testado a partir do teste cypress e2d que se encontra no caminho `client\cypress\e2e\e2e.cy.js`

## 3. Decisões 

Para o detalhamento das decisões por favor acesse o arquivo:
[Comments.md](https://github.com/anaclaramsb/Busca-Juridica/blob/main/COMMENTS.md)

