# Desafio Testes E2E - Outsera

Para instalar o cypress e suas dependências, execute o comando "npm i" após baixar o repositório

Report da ultima execução: https://github.com/thiagoliv/cypress_challenge/blob/main/cypress/reports/report_19-11-2024_19h18m25s.html

Observações:
- Commitei o relatório no projeto para facilitar a visualização
- Necessário baixar o arquivo html e abrir no navegador


# Cypress Challenge

Este projeto é uma automação de testes desenvolvida com **Cypress** utilizando **BDD** (Behavior-Driven Development) através do **Cucumber**. O projeto foi elaborado como parte de um desafio, e visa testar as principais funcionalidades de uma aplicação de e-commerce, incluindo carrinho de compras, páginas de produto e checkout.

## Requisitos

Certifique-se de ter os seguintes pré-requisitos instalados para executar o projeto:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) - Gerenciador de pacotes do Node.js

## Instalação e Configuração

### Passos para Configurar o Ambiente Local

1. **Clone o Repositório**: Clone o repositório para sua máquina local usando o comando:
   ```bash
   git clone https://github.com/thiagoliv/cypress_challenge.git
   ```

2. **Acesse o Diretório do Projeto**: Navegue até o diretório do projeto clonado:
   ```bash
   cd cypress_challenge
   ```

3. **Instale as Dependências**: Instale todas as dependências necessárias do projeto:
   ```bash
   npm install
   ```

## Executando os Testes

### Execução dos Testes no Cypress

Para executar os testes automatizados, utilize o seguinte comando:
```bash
npm run test:gui
```
Este comando abrirá o Cypress Test Runner para que você possa escolher e executar os testes manualmente.

### Executar o Teste com Relatório Cucumber

Para gerar o relatório dos testes em formato HTML utilizando o **Cucumber**, execute o comando abaixo:
```bash
npm run cucumber-report:run
```
Isso irá executar o script `cucumber-html-reporter.js` localizado em `cypress/support`, que gera o relatório dos testes em formato legível.

Report da ultima execução: https://github.com/thiagoliv/cypress_challenge/blob/main/cypress/reports/report_19-11-2024_19h32m58s.html

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
.
├── cypress/
│   ├── cucumber-json/              # Relatórios gerados em JSON
│   │   └── desafio.cucumber.json   # Relatório JSON gerado após a execução dos testes
│   ├── e2e/specs/                  # Arquivos de testes
│   │   └── desafio.feature         # Arquivo com os cenários de teste
│   ├── fixtures/                   # Dados estáticos para utilização nos testes
│   ├── reports/                    # Relatórios HTML gerados após a execução dos testes
│   ├── support/
│   │   ├── pages/                  # Page Objects do projeto
│   │   │   ├── checkoutPage/       # Elementos e ações da página de checkout
│   │   │   ├── homePage/           # Elementos e ações da página inicial
│   │   │   ├── mincartPage/        # Elementos e ações da página do carrinho
│   │   │   └── pdpPage/            # Elementos e ações da página de produto
│   │   ├── step_definitions/       # Definições dos passos dos testes BDD
│   │   │   ├── steps.js            # Arquivo com a implementação dos steps
│   │   │   └── commands.js         # Comandos personalizados do Cypress
│   │   └── cucumber-html-reporter.js  # Script para gerar o relatório HTML
├── node_modules/                   # Dependências do projeto
├── .gitignore                      # Arquivos ignorados no Git
├── cypress.config.js               # Configuração principal do Cypress
├── package-lock.json               # Lockfile do npm
├── package.json                    # Configurações de dependências e scripts
└── README.md                       # Documentação do projeto
```

## Descrição dos Arquivos

- **`cypress/e2e/specs/desafio.feature`**: Contém os cenários de teste utilizando **Cucumber**.
- **`cypress/support/pages/`**: Diretório que contém os **Page Objects**, organizando elementos e ações das diferentes páginas da aplicação.
- **`cypress/support/step_definitions/`**: Implementação dos passos dos cenários de teste, seguindo o formato **Gherkin**.
- **`cypress/support/cucumber-html-reporter.js`**: Script que gera o relatório em HTML após a execução dos testes.

## Scripts Disponíveis

No arquivo `package.json`, estão disponíveis os seguintes scripts:

- **`test`**: Exibe um erro se o comando `test` for chamado sem um script específico.
- **`cucumber-report:run`**: Executa o script para gerar o relatório dos testes em formato HTML.

## Ferramentas Utilizadas

- **Cypress**: Framework de automação de testes end-to-end.
- **Cypress Cucumber Preprocessor**: Integração do **Cucumber** com o Cypress para BDD.
- **Cucumber HTML Reporter**: Utilizado para gerar relatórios dos testes em um formato legível.

## Contribuição

Para contribuir com este projeto:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Adicionando minha feature'`.
4. Faça um push para a branch: `git push origin minha-feature`.
5. Abra um pull request.

---

Este projeto foi criado com o objetivo de automatizar funcionalidades de um e-commerce, aplicando as melhores práticas de automação de testes com **Cypress** e **BDD**.

