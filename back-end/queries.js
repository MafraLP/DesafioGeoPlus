const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database:'desafiodb',
    password:'123',
    port: 5432,
})

const createPpl =(req,res)=>{
    const { nome, cpf, rg, data_nasc, sexo } = req.body
    pool.query('INSERT INTO pessoasdb (nome,cpf,rg,data_nasc,sexo) VALUES ($1,$2,$3,$4,$5) RETURNING *', [nome,cpf,rg,data_nasc,sexo],(error,results)=>{
        if(error){
            throw (error);
        }
        res.status(201).send(`Pessoa adicionada com ID ${results.rows[0].id}`)
    })
}

const updatePpl = (req, res)=> {
    const id = parseInt(req.params.id)
    const { nome, cpf, rg, data_nasc, sexo } = req.body
    pool.query(
        'UPDATE pessoasdb SET nome = $1,cpf=$2,rg=$3,data_nasc=$4,sexo=$5', [nome, cpf, rg, data_nasc, sexo], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Pessoa alterada com ID ${id}`)
        }
    )
}
const getAll=(req, res)=> {
    pool.query('SELECT * FROM pessoasdb ORDER BY id ADC',(error,results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getById=(req,res)=>{
    const id = parseInt(req.param.id)
    pool.query('SELECT * FROM pessoasdb WHERE id = $1',[id],(error,results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    }
    )
}

const deletePpl = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM pessoasdb WHERE id = $1'),[id],(error,results)=>{
        if(error){
            throw error
        }
        res.status(200).send(`Pessoa deletada com ID ${id}`)
    }
}

module.exports={
    updatePpl,
    createPpl,
    getAll,
    getById,
    deletePpl,
}
