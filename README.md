<h1>API de catálogo de produtos</h1>


<strong>Ambiente de desenvolvimento</strong>

Segue as versões que foram utilizadas:
- NodeJS: 16.14.0
- Mysql-server: 8.0.29
- Yarn: 1.22.15
 
 
<strong>Instruções</strong>
- Instalar as dependências do projeto, com o comando <strong>yarn</strong> ou <strong>npm install</strong> no terminal.
- Importar a base de dados que está na pasta <strong>db</strong>, localizada na raiz do projeto. (Dessa forma não será preciso criar uma base nova, e rodar as migrations para criar as respectivas tabelas).
- Caso deseje criar a base de dados do zero, após criar a base, basta rodar o comando <strong>yarn sequelize db:migrate</strong> na raiz do projeto para criar as tabelas.
- Criar um arquivo <strong>.env</strong> baseado no arquivo de exemplo disponibilizado, e preencher as repesctivos campos conforme seu ambiente.
- Rodar o comando <strong>yarn dev</strong> para inicializar a aplicação.
 
<strong>Rotas</strong>

 Foi disponibilizado um arquivo de rotas do <a href="https://insomnia.rest/" target="_blank">Insomnia</a>, que está localizado na pasta <strong>insomnia</strong> na raiz do projeto.
 <br>
 Para estes exemplos, vou deixar a porta da aplicação como "3000". (Lembrando que a mesma deve configurada no .env do projeto).
- <strong>All Products:</strong> Requisição GET para a URL: http://localhost:3000/products
- <strong>Filter Products:</strong> Requisição GET para a URL: http://localhost:3000/products/filter enviando no body da requisição o que deseja filtrar em formato JSON, conforme exemplo abaixo.
```bash
{
	"title": "Processador"
}
```
- <strong>Create Product:</strong> Requisição POST para a URL: http://localhost:3000/products, enviando no body da requisição as informações do produto em formato JSON, conforme exemplo abaixo.
```bash
{
	"title": "Microondas",
	"description": "Microondas Philco",
	"price": 599.00,
	"categoryId": 4
}
```
- <strong>Update Product:</strong> Requisição PUT para a URL: http://localhost:3000/products/:id, passando por parâmetro na URL o <strong>id</strong> do produto que deseja atualizar e  enviando no body da requisição as informações do produto em formato JSON, conforme exemplo abaixo.
```bash
{
	"description": "Processador Intel", 
	"price": 789.90
}
```
- <strong>Delete Product:</strong> Requisição DELETE para a URL: http://localhost:3000/products/:id, passando por parâmetro na URL o <strong>id</strong> do produto que deseja excluir.

As requisições para as Categorias, são as mesmas dos produtos, seguindo a URL: http://localhost:3000/categories .
