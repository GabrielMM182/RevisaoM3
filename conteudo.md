-> instalacao de npm i axios nodemon express pg bcrypt jsonwebtoken cors
-> axios = para pegar api de terceiros 
-> nodemon = para atualizar o server apos mudancas 
-> express = para usar os http 
-> pg = conectar com o banco de dados postgreSQL
-> bcrypt = criptografar nossa senha
-> jsonwebtoken = receber o token com a palavra secreta

-> primeiro vamos mostrar como funciona o axios e api de terceiros

-> usar api da marvel  mostrar a diferenca e mostrar como faz para se conectar com sua documentacao e mostrar como esta datada

https://developer.marvel.com/documentation/authorization

-> vou utilizar como funciona com a api do breaking bad de exemplo tambem 

-> apos isso vamos realizar a parte do backend do TO-DO que vai conter CRUD e a parte de login com o hash e criptografia 

-> Primeiramente vamos criar o schema.sql e a conexao com o pg do postgreSQL

-> adicionar cors para não atrapalhar o frontEnd 

-> apos isso vamos montar os endPoints, e já fazendo a parte do login e adiconar o arquivo com nossa senha secreta para fazer o uso do hash e toda sua comunicacao

-> na hora da contrucao do cadastro comentar sobre sqlInjection e oq isso pode causar 

https://www.stackhawk.com/blog/node-js-sql-injection-guide-examples-and-prevention/

-> apos fazer o cadastro e  o login vamos realizar o middleware para autenticar e verificar o login 

-> apos isso vamos colocar o middleware de verificacao 

-> configurar o postman para aceitar essa verificacao de middleware com o token 

-> construcao do CRUD para o todo (ver se vai ter imagens)

