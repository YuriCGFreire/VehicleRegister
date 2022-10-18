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

O *Vehicle Register* é um projeto totalmente responsivo para cadastro de carros, nele é possível incluir, exlcuir e atualizar um veículo. No filtro de buscar, os veículos serão filtrados por qualquer informação que for digitada, seja a placa, valor ou ano do carro e também é possível favoritar os veículos. O projeto frontend é feito com reactjs e SASS, o backend é utilizado nodejs (nestjs) e o banco de dados postgresql.

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
##

## Backend

### POST /vehicles

- Informações para salvar um veículo

```json
{
	"name": "Voyage",
	"description": "Descrição de um carro voyage",
	"plate": "BKX-9607",
	"year": "2020",
	"color": "ff0000",
	"price": "400.000,00",
	"isFavorite": false
}
```

- Resposta de veículo salvo com sucesso

```json
{
	"id": "92700f38-29b0-49d1-a477-ae6699fcd6bb",
	"name": "Voyage",
	"description": "Descrição de um Voyage",
	"plate": "BKX-9607",
	"year": "2020",
	"color": "ff0000",
	"price": "400.000,00",
	"isFavorite": false,
	"deleted_at": null,
	"created_at": "2022-10-18T15:53:48.324Z",
	"updated_at": "2022-10-18T15:53:48.324Z"
}
```

### GET - na rota /vehicles

- Irá retornar uma array com todos os veículos cadastrados 

```json
[
	{
		"id": "92700f38-29b0-49d1-a477-ae6699fcd6bb",
		"name": "Voyage",
		"description": "Descrição de um Voyage",
		"plate": "BKX-9607",
		"year": "2020",
		"color": "ff0000",
		"price": "400.000,00",
		"isFavorite": false,
		"created_at": "2022-10-18T15:53:48.324Z",
		"updated_at": "2022-10-18T15:53:48.324Z",
		"deleted_at": null
	},
	{
		"id": "e2600dba-8350-4cca-8f31-3e89f05ddb0c",
		"name": "Lamborghini",
		"description": "Descrição de uma Lamborghini",
		"plate": "BKX-9609",
		"year": "2020",
		"color": "ff0000",
		"price": "600.000,00",
		"isFavorite": false,
		"created_at": "2022-10-18T15:57:13.011Z",
		"updated_at": "2022-10-18T16:00:16.387Z",
		"deleted_at": null
	}
]
```

### GET - /vehicles/isfavorite

- Irá retornar um array com os vehicles favoritos

```json
[
	{
		"id": "e2600dba-8350-4cca-8f31-3e89f05ddb0c",
		"name": "Lamborghini",
		"description": "Descrição de uma Lamborghini",
		"plate": "BKX-9609",
		"year": "2020",
		"color": "ff0000",
		"price": "600.000,00",
		"isFavorite": true,
		"created_at": "2022-10-18T15:57:13.011Z",
		"updated_at": "2022-10-18T16:04:58.570Z",
		"deleted_at": null
	}
]
```

### GET - /vehicles/:id

- Irá retornar o veículo do ID que foi passado 

```json
{
	"id": "92700f38-29b0-49d1-a477-ae6699fcd6bb",
	"name": "Voyage",
	"description": "Descrição de um Voyage",
	"plate": "BKX-9607",
	"year": "2020",
	"color": "ff0000",
	"price": "400.000,00",
	"isFavorite": false,
	"deleted_at": null,
	"created_at": "2022-10-18T15:53:48.324Z",
	"updated_at": "2022-10-18T15:53:48.324Z"
}
```

### PATCH - /vehicles/:id

- Rota responsável por atualizar algum dado de algum veículo, basta passar o id na rota e a informação que deseja alterar no corpo da requisição.
- Informação que eu desejo altera, por exemplo a descrição do veículo

```json
{
	"description": "Voyage seminovo"
}
```

- Resposta

```json
{
	"id": "92700f38-29b0-49d1-a477-ae6699fcd6bb",
	"name": "voyage",
	"description": "Voyage seminovo",
	"plate": "BKX-9607",
	"year": "2020",
	"color": "ff0000",
	"price": "400.000,00",
	"isFavorite": false,
	"created_at": "2022-10-18T15:53:48.324Z",
	"updated_at": "2022-10-18T16:13:22.842Z",
	"deleted_at": null
}
```

### DELETE - /vehicles/:id

- Para deletar o carro basta passar o id do veículo na rota 

### PATCH - /vehicles/isfavorite/:id

- Para setar um veículo como favorito, bastar passar o id do veículo na rota
##

## Frontend

### Home
- Home onde serão listados os veículos
 
<div align="center">
  <img src="https://user-images.githubusercontent.com/82773177/196513417-0e880a75-621e-4700-abf7-967cf5e6dfeb.jpg"/>
<div>

### Adicionar um novo veículo
<div align="center">
  <p>
    Para adicionar, basta clicar no botão "Add new vehicle", um modal irá abrir com o formulário necessário para adicionar um veículo.
  </p>
  <img src="https://user-images.githubusercontent.com/82773177/196513169-ac0fecfa-dd50-49a2-9a55-319ed26a58c9.jpg"/>
<div>
