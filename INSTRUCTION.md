Precisa ter o NodeJS instalado

1. baixar o projetos do Git
git clone https://github.com/wborbajr/eXchange.git

2. entrar no diretorio que foi criado
cd eXchange

3. baixar as bibliotecas do projeto 
npm install

4. ajustar a configuracao do banco de dados
4.1 entrar na pasta 
cd src/app/config

5. editar o arquivo env.js
**** ATENCAO ****
NAO APONTAR PARA O BANCO DE DADOS JÁ EXISTE, POIS TODA VEZ QUE O SISTEMA É EXECUTADO
ELE PAGA E RECRIA TODAS AS TABELAS, VAI FAZER ASSIM ATÉ O TERMINO DO DESENVOLVIMETO DOS 
CRUDS.

6. voltar para a pasta raiz do projeto
cd ..
cd ..
cd ..

7. iniciar o SISTEMA
npm start

-----------------------------------------

1. Baixar e instalar o Postman para poder testar os serviços

2. Dentro da pasta raiz do projeto tem uma pasta postman

3. importar o arquivo para dentro do Postman

4. selecionar o serviço que desenja testar e executar

-------------------------------------------

Conceitos

O serviço foi feito usando RestAPI, aonde cada ação tem uma assinatura especifica
GET - para retornar a lista do banco de dados
POST - utiliado para Insert no banco
PUT - utilizado para Update no banco
DEL - utilizado para Delete no banco