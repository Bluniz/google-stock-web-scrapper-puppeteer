<h1>Google stock web scrapper Puppeteer</h1>

<p align="center">
<image src=".github/logo.svg"/></br>
</p>

<p align="center">
<a href="#sobre-memo">Sobre</a>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
<a href="#rotas">Rotas</a>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
<a href="#tecnologias-rocket">Tecnologias</a>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
<a href="#como-contribuir-">Como Contribuir</a>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
<a href="#licença-scroll">Licença</a>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
</p>

## Apresentação do Projeto :sparkles:

<p align="center">
<image src=".github/preview.png" />
</p>

---

## Sobre :memo:

Essa é uma aplicação de voltada para finanças, ela tem como objetivo pegar dados de ações ou fundos imobiliários direto do google e trazer de forma fácil e gratuita. Para isso, fazemos um web scrapiing utilizando o puppeteer.js.

## Rotas

```js
GET: http://localhost:3333/stock/:stockName
```

```json
{
  "name": "Nome da Ação/Fundo/Unit",
  "value": "Valor da Ação/Fundo/Unit",
  "type": "Tipo da Ação/Fundo/Unit"
}
```

## Tecnologias :rocket:

- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">Javascript</a>
- <a href="https://pptr.dev/" target="_blank">PuppeteerJs</a>
- <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
- <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
- <a href="https://expressjs.com/pt-br/" target="_blank">Express</a>

## Como contribuir 🤔

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

## Licença :scroll:

> Esse projeto está sob a licença MIT.

---

##### Feito por 'Lucas Rosa'(Bluniz) :wave:
