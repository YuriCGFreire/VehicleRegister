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
- ReactModal 
- ReactHook Form
- Yup
- React Toastify
- Html
- CSS
- SASS

## Escopo do projeto

O *Vehicle Register* é um projeto para cadastro de carros, nele é possível incluir, exlcuir e atualizar um veículo. No filtro de buscar, os veículos serão filtrados por qualquer informação que for digitada, seja a placa, valor ou ano do carro e também é possível favoritar os veículos. O projeto frontend é feito com reactjs e SASS, o backend é utilizado nodejs (nestjs) e o banco de dados postgresql.

<br>

## Configuração e como rodar o projeto

### Configuração do arquivo .env
- Primeiro precisando configurar o arquivo ".env". Crie um arquivo ".env" na pasta vehicle-api com as seguintes variáveis e valores caso tenha docker instalado na sua máquina:  

```
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=database
TYPEORM_PORT=5432
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=123456789
```
Caso não possua o docker, criar um arquivo .env, com as mesmas variáveis, mas com os valores que serão necessários para a api se conectar com o seu banco de dados. 

Ex.:
``` 
TYPEORM_CONNECTION=postgres (essa variável deverá ter esse valor)
TYPEORM_HOST=ip_da_maquina_onde_está_rodando_o_db
TYPEORM_PORT=porta_do_seu_banco_de_dados
TYPEORM_USERNAME=user_name_do_seu_banco_de_dados
TYPEORM_PASSWORD=senha_do_seu_banco_de_dados
```
**Obs1: Na variável TYPEORM_HOST se você for rodar o projeto em uma máquina local, você pode colocar apenas "localhost".**
**Obs2: Projeto desenvolvido com Postgresql, para isso precisa ser um DB Postgresql.**


### Rodando o projeto
- Se você possui docker instalado, basta abrir o terminal na pasta do backend do projeto (vehicle-api) e rodar o comando docker-compose up, será feita a instalação das dependencias e inicialização do backend. Após isso você deve abrir o terminal na pasta do frontendo do projeto (vehicle-web) rodar o comando "npm i" para instalar as dependências e depois o comando "npm start" para rodar o frontend, que irá rodar na porta 3000. 

- Se não possuir o docker instalado. Abra o terminal na pasta vehicle-api e rode o comando "npm i" para instalar as dependencias e depois o comando "npm run start:dev" 

Em seguida crie um arquivo ".env" na pasta vehicle-api com as seguintes variáveis.
##

## Backend


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
