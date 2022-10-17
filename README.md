# Vehicle Register

## Linguagens, tecnologias e ferramentas utilizadas

<br>

- Docker
- Node
- PostgreSQL
- Javascript
- Typescript
- TypeORM
- UUID
- React
- Html
- CSS

## Escopo do projeto

O *TodoApp* é um projeto para fins ditáticos, aprendizado de Reactjs e Docker. Consiste em um simples CRUD de tasks, o qual você pode criar,
atualizar, exlcuir e concluir as tasks.

<br>

## Como rodar a aplicação

- Se você possui docker instalado, basta abrir o terminal na pasta do projeto (TODOAPP) e rodar o comando 
docker-compose up. Será feita a instalação das dependencias, inicialização do projeto e após isso o frontendo do projeto irá rodar na porta 3000.

- Se não possui o docker instalado. Abra o terminal na pasta todo-app-api e rode o comando :

```
npm i
```
Será feita a instalação das dependencias e depois rode o comando 

```
npm run start:dev
```

Em seguida abra a pasta web-todo-app e rode o comando: 

```
npm i
```

Será feita a instalação das dependencias e depois rode o comando 

```
npm start
```
Logo após isso, basta conferir o projeto na sua porta local 3000.
##

## Backend
A documentação do backend foi feita com swagger e para conferir basta, rodar a api e acessar o endpoint [3003/api](http://localhost:3003/api/)

## Frontend

- Adicionar uma nova task:
Basta digitar no input qual a nova task que você quer adicionar e depois clicar em adicionar

- Atualizar task:
Para atualizar uma nova task, é preciso clicar na task, que irá abrir um modal onde você pode escrever no input a nova task
clicar em atualizar ou clicar em cancelar, caso mude de ideia

- Excluir task: 
Ao clicar no icone de lixo ao lado da task você irá exclui-la

- Concluir task: 
Ao clicar na checkbox do lado esquerdo da task, você irá conclui-la

##
<div align="center">
  Home da aplicação, onde serão listadas as tasks 
  <img src="https://user-images.githubusercontent.com/82773177/192562699-ab59e352-84d4-445a-983a-6346074b9226.jpg"/>
<div>
  
##
<div align="center">
  Modal para atualizar task
  <img src="https://user-images.githubusercontent.com/82773177/192564280-79d625d3-091e-4e05-9eb8-35afe3fafff2.jpg"/>
<div>
