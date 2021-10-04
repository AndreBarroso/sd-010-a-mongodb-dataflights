# Boas vindas ao repositório do projeto Data Flights!
No bloco finalizado com esse projeto, tive o meu primeiro contato com banco de dados não relacionais. Para o estudo dessa família de banco de dados, foi adotado o MongoDB, por ser no mercado de trabalho, o mais utilizado dessa categoria.

Esse projeto teve como objetivo, desenvolver uma série de queries para executar ações no banco de dados **dataFlights** fornecido.
As principais ações executadas nesse projeto, encontram-se descritas no tópico abaixo. 

---

## Habilidades

- Buscar documentos no banco
- Usar filtros na busca
- Deletar documentos conforme filtro
- Contar documentos compreendidos nos filtros pedidos
- Inserir documentos no banco

---

## Instruções para executar as queries em seu próprio computador 

Cada query está nomeada como desafio1..28 e segue a numeração da lista de requisitos abaixo.
Todas elas estão no arquivo challenge.

1. Para executar as queries é necessário ter o MongoDB instalado.
Para informações sobre como instalar [clique aqui](https://docs.mongodb.com/manual/installation/).

2. Abra o terminal, acesse o diretório de sua preferência onde 
você deseja fazer o download, e crie uma pasta usando o comando **mkdir**:
```bash
mkdir projeto-andre
```
3. Entre no diretório que você acabou de criar: 
```bash
cd projeto-andre
```

3. Faça o clone do projeto executando o comando a seguir:
```bash
git clone https://github.com/AndreBarroso/sd-010-a-mongodb-dataflights.git
```

4. Acesse a pasta criada executando o comando a seguir:
```bash
cd sd-010-a-mongodb-dataflights
```

5. Instale as dependências do projeto executando:
```bash
npm install;
```

6. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `dataFlights`:
    ```sh
    DBNAME=dataFlights ./scripts/resetdb.sh assets
    ```
  * A execução desse script criará um banco de dados chamado `dataFlights` e importará os dados para a coleção `voos`.

7. Seguindo os passo acima, você pode executar as queries da lista abaixo em seu MongoDB. 

Obs. Nesse projeto encontram-se também os testes unitários para cada uma das queries. O comando do terminal para a execução dos testes é:
```sh
./scripts/evaluate.sh
```
Para executar apenas o teste de apenas uma query, o comando é:
```sh
./scripts/evaluate.sh desafioN
```

Para dúvidas, entre em contato comigo pelo email: andrefb.eng1@gmail.com .

---

### Lista de requisitos

Abaixo encontra-se a lista de requisitos solicitados para a elaboração do projeto.

#### 1 - Retorne a quantidade de documentos inseridos na coleção `voos`.

#### 2 - Retorne os 10 primeiros documentos com voos da empresa `AZUL`.

#### 3 - Retorne a quantidade de voos da empresa `AZUL`.

#### 4 - Retorne a quantidade de voos da empresa `GOL`.

#### 5 - Retorne o `vooId` do décimo ao décimo segundo documento da coleção `voos`.

#### 6 - Retorne apenas os campos `empresa.sigla`, `empresa.nome` e `passageiros` do voo com o campo `vooId` igual a `756807`.

#### 7 - Retorne a quantidade de voos em que o ano seja menor do que `2017`.

#### 8 - Retorne a quantidade de voos em que o ano seja maior do que `2016`.

#### 9 - Retorne a quantidade de voos entre os anos de `2017` e `2018`.

#### 10 - Retorne apenas os **10** primeiros documentos com voos da empresa `GOL` do ano de `2017`. Exiba apenas os campos `vooId`, `empresa.nome`, `aeroportoOrigem.nome`, `aeroportoDestino.nome`, `mes` e `ano`.

#### 11 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.pais` não seja igual a `ESTADOS UNIDOS`.

#### 12 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.pais` seja igual a `BRASIL`, `ARGENTINA` ou `CHILE`.

#### 13 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.continente` não seja igual a `EUROPA`, `ÁSIA` e `OCEANIA`.

#### 14 - Retorne o total de voos em que o país de origem não seja `BRASIL`.

#### 15 - Retorne o total de voos com mais de 20 `decolagens`.

#### 16 - Retorne o total de voos em que o campo `natureza` possui o valor `Internacional`.

#### 17 - Retorne o total de voos em que o campo `natureza` possui o valor `Doméstica`.

#### 18 - Retorne o `vooId`, `mes` e `ano` do primeiro voo com mais de `7000` passageiros pagos.

#### 19 - Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` exista.

#### 20 - Retorne o `vooId` do primeiro voo em que o campo `rtk` não exista.

#### 21 - Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` seja maior ou igual a `1000`.

#### 22 - Retorne o `vooId` do primeiro voo em que a empresa seja `DELTA AIRLINES` ou `AMERICAN AIRLINES`, a sigla do aeroporto de origem seja `SBGR` e a sigla do aeroporto de destino seja `KJFK`.

#### 23 - Retorne o `vooId` e `litrosCombustivel` do primeiro voo em que o campo `litrosCombustivel` **não seja maior do que** `1000` e o campo `litrosCombustivel` exista.

#### 24 - Retorne o `vooId`, `empresa.nome` e `litrosCombustivel` do primeiro voo em que `litrosCombustivel` **não seja maior do que** `600` **e** a empresa **não seja** `GOL` **ou** `AZUL`, **e** o campo `litrosCombustivel` exista.

#### 25 - Remova todos os voos da empresa `AZUL` em que a quantidade de combustível seja menor do que `400`. Informe a quantidade de documentos removidos.

#### 26 - Remova todos os voos da empresa `GOL` em que a quantidade de passageiros pagos esteja entre `5` e `10`, incluindo os casos em que a quantidade é `5` e `10`. Informe a quantidade de documentos removidos.

#### 27 - Retorne a quantidade total de voos de natureza `Doméstica` que a empresa `PASSAREDO` possui, via uso de uma nova coleção chamada `resumoVoos`.

Ou seja, a coleção `resumoVoos` conterá documentos onde cada um indica para cada empresa a quantidade total de voos que ela possui de natureza `Doméstica`.

Para isso, escreva no arquivo `desafio27.js` duas queries, **nesta ordem**:

1. Conte quantos voos da empresa `PASSAREDO` cujo campo `natureza` possua valor igual a `Doméstica` e crie uma query que insira na coleção `resumoVoos` um documento com os campos: `empresa` (nome da empresa) e `totalVoosDomesticos` (o total retornado anteriormente).

2. Em uma segunda query, retorne a `empresa` e o `totalVoosDomesticos` do primeiro documento presente na coleção `resumoVoos` em que a empresa seja `PASSAREDO`.

#### 28 - Retorne a quantidade total de voos de natureza `Doméstica` que a empresa `LATAM AIRLINES BRASIL` possui, via uso de uma nova coleção chamada `resumoVoos`.

Para isso, escreva no arquivo `desafio28.js` duas queries, **nesta ordem**:

1. Conte quantos voos da empresa `LATAM AIRLINES BRASIL` cujo campo `natureza` possua valor igual a `Doméstica` e crie uma query que insira na coleção `resumoVoos` um documento com os campos: `empresa` (nome da empresa) e `totalVoosDomesticos` (o total retornado anteriormente).

2. Em uma segunda query, retorne a `empresa` e o `totalVoosDomesticos` do primeiro documento presente na coleção `resumoVoos` em que a empresa seja `LATAM AIRLINES BRASIL`.

---
