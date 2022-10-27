const db = require("../config/database");
const format = require('pg-format');

const pessoas = [
    {
      "id": 1,
      "nome": "Francisca Julia da Costa",
      "cpf": "457.696.936-65",
      "rg": "47.360.897-2",
      "data_nasc": "23/03/1944",
      "sexo": "Feminino"
    },
    {
      "id": 2,
      "nome": "Noah Felipe Silva",
      "cpf": "956.531.431-70",
      "rg": "40.974.782-8",
      "data_nasc": "11/07/1964",
      "sexo": "Masculino"
    },
    {
      "id": 3,
      "nome": "Alícia Rosângela Melo",
      "cpf": "066.291.353-18",
      "rg": "36.214.141-1",
      "data_nasc": "18/02/1978",
      "sexo": "Feminino"
    },
    {
      "id": 4,
      "nome": "Cristiane Renata Ana das Neves",
      "cpf": "946.074.401-08",
      "rg": "32.301.736-8",
      "data_nasc": "10/05/1966",
      "sexo": "Feminino"
    },
    {
      "id": 5,
      "nome": "Priscila Benedita Vanessa Ferreira",
      "cpf": "888.282.394-68",
      "rg": "44.524.670-4",
      "data_nasc": "15/11/1966",
      "sexo": "Feminino"
    },
    {
      "id": 6,
      "nome": "Bianca Carolina Nunes",
      "cpf": "484.323.140-13",
      "rg": "44.466.563-8",
      "data_nasc": "16/03/1948",
      "sexo": "Feminino"
    },
    {
      "id": 7,
      "nome": "Yuri Vicente Manuel Silveira",
      "cpf": "250.111.093-56",
      "rg": "18.597.361-9",
      "data_nasc": "05/09/1974",
      "sexo": "Masculino"
    },
    {
      "id": 8,
      "nome": "Melissa Alessandra Barros",
      "cpf": "446.675.916-25",
      "rg": "25.598.673-7",
      "data_nasc": "13/01/2000",
      "sexo": "Feminino"
    },
    {
      "id": 9,
      "nome": "Márcia Daniela Lara da Cruz",
      "cpf": "932.803.826-02",
      "rg": "40.653.176-6",
      "data_nasc": "04/06/1986",
      "sexo": "Feminino"
    },
    {
      "id": 10,
      "nome": "Filipe Anderson Rafael Assis",
      "cpf": "704.869.005-41",
      "rg": "39.383.334-3",
      "data_nasc": "19/11/1995",
      "sexo": "Masculino"
    },
    {
      "id": 11,
      "nome": "Luís Vinicius Sebastião Jesus",
      "cpf": "035.960.588-56",
      "rg": "29.915.692-8",
      "data_nasc": "23/04/1965",
      "sexo": "Masculino"
    },
    {
      "id": 12,
      "nome": "Cecília Caroline Nascimento",
      "cpf": "034.396.672-78",
      "rg": "48.673.066-9",
      "data_nasc": "04/02/1951",
      "sexo": "Feminino"
    },
    {
      "id": 13,
      "nome": "Raimunda Sandra Ferreira",
      "cpf": "757.187.891-85",
      "rg": "21.189.806-5",
      "data_nasc": "17/11/1974",
      "sexo": "Feminino"
    },
    {
      "id": 14,
      "nome": "Andreia Isabelly Juliana Melo",
      "cpf": "736.348.985-85",
      "rg": "24.677.018-1",
      "data_nasc": "11/10/1963",
      "sexo": "Feminino"
    },
    {
      "id": 15,
      "nome": "Nicolas Bernardo Moura",
      "cpf": "061.370.865-26",
      "rg": "16.302.343-8",
      "data_nasc": "08/06/1989",
      "sexo": "Masculino"
    },
    {
      "id": 16,
      "nome": "Diego Benjamin Tiago da Luz",
      "cpf": "991.152.443-42",
      "rg": "38.315.100-4",
      "data_nasc": "04/06/1990",
      "sexo": "Masculino"
    },
    {
      "id": 17,
      "nome": "Marlene Emanuelly Yasmin Cavalcanti",
      "cpf": "781.233.625-52",
      "rg": "21.068.742-3",
      "data_nasc": "15/10/1961",
      "sexo": "Feminino"
    },
    {
      "id": 18,
      "nome": "Vanessa Isabela da Luz",
      "cpf": "872.138.490-85",
      "rg": "44.289.193-3",
      "data_nasc": "05/09/1982",
      "sexo": "Feminino"
    },
    {
      "id": 19,
      "nome": "Camila Flávia Vera Mendes",
      "cpf": "790.524.518-77",
      "rg": "40.847.994-2",
      "data_nasc": "01/07/1952",
      "sexo": "Feminino"
    },
    {
      "id": 20,
      "nome": "Luana Lívia Lara Campos",
      "cpf": "532.901.056-01",
      "rg": "14.732.946-2",
      "data_nasc": "19/08/1981",
      "sexo": "Feminino"
    },
    {
      "id": 21,
      "nome": "Josefa Nina Galvão",
      "cpf": "379.743.833-80",
      "rg": "13.878.690-2",
      "data_nasc": "27/01/1943",
      "sexo": "Feminino"
    },
    {
      "id": 22,
      "nome": "Natália Isabelly Silvana da Paz",
      "cpf": "454.172.867-29",
      "rg": "22.986.096-5",
      "data_nasc": "17/09/1980",
      "sexo": "Feminino"
    },
    {
      "id": 23,
      "nome": "Amanda Sebastiana Vieira",
      "cpf": "703.941.038-90",
      "rg": "50.251.196-5",
      "data_nasc": "08/06/1960",
      "sexo": "Feminino"
    },
    {
      "id": 24,
      "nome": "Noah Pedro Alves",
      "cpf": "074.733.106-58",
      "rg": "32.110.015-3",
      "data_nasc": "14/08/1992",
      "sexo": "Masculino"
    },
    {
      "id": 25,
      "nome": "Giovana Camila da Conceição",
      "cpf": "418.746.840-49",
      "rg": "35.520.215-3",
      "data_nasc": "25/06/1947",
      "sexo": "Feminino"
    },
    {
      "id": 26,
      "nome": "Pietro Joaquim Emanuel Gonçalves",
      "cpf": "003.502.230-25",
      "rg": "12.099.068-4",
      "data_nasc": "21/04/1999",
      "sexo": "Masculino"
    },
    {
      "id": 27,
      "nome": "Tereza Kamilly Mariana Porto",
      "cpf": "050.946.705-90",
      "rg": "39.830.941-3",
      "data_nasc": "16/06/1959",
      "sexo": "Feminino"
    },
    {
      "id": 28,
      "nome": "Caroline Emanuelly Lívia Moreira",
      "cpf": "673.831.546-57",
      "rg": "24.561.727-9",
      "data_nasc": "09/04/1948",
      "sexo": "Feminino"
    },
    {
      "id": 29,
      "nome": "Gabriel Ricardo da Paz",
      "cpf": "829.270.172-98",
      "rg": "30.407.114-6",
      "data_nasc": "24/03/1980",
      "sexo": "Masculino"
    },
    {
      "id": 30,
      "nome": "Giovanni Igor Augusto Pires",
      "cpf": "584.880.490-72",
      "rg": "33.874.271-2",
      "data_nasc": "24/08/1946",
      "sexo": "Masculino"
    }
];

exports.insertAll=async(req,res)=>{
    for(let i=0;i<pessoas.length;i++){
      const {rows} = await db.query(
        "INSERT INTO pessoasdb (nome,cpf,rg,data_nasc,sexo) VALUES ($1,$2,$3,$4,$5)",[pessoas[i].nome,pessoas[i].cpf,pessoas[i].rg,pessoas[i].data_nasc,pessoas[i].sexo]
    );
    console.log(`Pessoa ${i} inserida`)
    }
    res.status(200).send("As pessoas foram inseridas");

  }
