const db = require("../config/database");


//Funcao post para criar pessoa nova no banco de dados usando em CreatePpl
exports.createPeople = async (req,res)=>{
    const {nome,cpf,rg,data_nasc,sexo}=req.body;
    const {rows} = await db.query(
        "INSERT INTO pessoasdb (nome,cpf,rg,data_nasc,sexo) VALUES ($1,$2,$3,$4,$5)",[nome,cpf,rg,data_nasc,sexo]
    );
    res.status(200).send({
        message: "Pessoa adicoinada com sucesso",
        body:{
            pessoa: {nome,cpf,rg,data_nasc,sexo}
        },
    });
};

//Funcao get para receber todos as pessoas usada em ListPpl na front-end
exports.listPeople = async(req,res)=>{
    const response = await db.query("SELECT * FROM pessoasdb ORDER BY id ASC");
    res.status(200).send(response.rows);


}

//Funcao get para recer por ID chamado em UpdatePpl.js na front-end
exports.getById = async(req,res)=>{
    console.log(req.params.id);
    const pplId = parseInt(req.params.id);
    const response =await db.query("SELECT nome,cpf,rg,data_nasc,sexo FROM pessoasdb WHERE id =$1",[pplId]);
    res.status(200).send(response.rows);
}
//Funcao put para atualizar cadastro de pessoa
exports.updatePpl = async(req,res)=>{
    const pplId = parseInt(req.params.id);
    const {nome,cpf,rg,data_nasc,sexo}=req.body;
    const response =await db.query('UPDATE pessoasdb SET nome=$1,cpf=$2,rg=$3,data_nasc=$4,sexo=$5 WHERE id=$6',[nome,cpf,rg,data_nasc,sexo,pplId]);
    res.status(200).send({message:"Pessoa alterada com sucesso"});
}
//Funcao para deletar pessoa por ID
exports.deleteByYd= async(req,res)=>{
    const pplId = parseInt(req.params.id);
    const response=await db.query("DELETE FROM pessoasdb WHERE id = $1",[pplId]);
    res.status(200).send({message:"Pessoa excluida com sucesso"});
}
//Funcao para limpar tabela
exports.deleteAll= async(req,res)=>{
    const response=await db.query("DELETE FROM pessoasdb");
    res.status(200).send({message:"A tabela foi excluida com sucesso"})
}




