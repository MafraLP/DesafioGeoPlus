import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ListPpl = () => {

    const [ppl,setPpl]=useState([]);
    //fetchall da db
    useEffect(()=>{
        axios.get("http://localhost:4001/people")
        .then(({data})=>{
            console.log("Tipo de data: "+typeof(res));
            setPpl(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

    //Funcao para deletar tabela (propositos de debug e teste)
    const deleteAll =()=>{
      axios.delete("http://localhost:4001/deleteall")
      .then((res)=>{
        if (res.status===200){
          alert("Pessoas excluidas com sucesso");
          window.location.reload();
        }else{
          alert("algo deu errado deleteall");
        }
      })
    }
    //Inserir os dados que foram fornecidos no template original (tambem para debug e testes)
    const insertAll =()=>{
      axios.post("http://localhost:4001/insertall")
      .then((res)=>{
        if (res.status===200){
          alert("Pessoas inseridas com sucesso");
          window.location.reload();
        }else{
          alert("algo deu errado insertall");
        }
      })
    }
    //Funcao para o botao de delete
    const deletePpl = (id) =>{
        axios.delete("http://localhost:4001/people/"+id)
        .then((res)=>{
            if(res.status===200){
                alert("Pessoa excluida com sucesso!");
                window.location.reload();
            }else Promise.reject();
        })
        .catch((err)=>alert("Algo deu errado delete"));
    };
    const columns = [
        {
          title: 'Nome',
          dataIndex: 'nome',
          key: 'nome',
        },
        {
          title: 'RG',
          dataIndex: 'rg',
          key: 'rg',
        },
        {
          title: 'CPF',
          dataIndex: 'cpf',
          key: 'cpf',
        },
        {
            title: 'Nascimento',
            dataIndex: 'data_nasc',
            key: 'data_nasc',
        },
        {
            title: 'Acoes',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                  <Button href={"/update/"+record.id}  shape="circle" icon={<EditOutlined/>}></Button>
                  <Button onClick={()=>deletePpl(record.id)} shape="circle" danger icon={<DeleteOutlined/>}></Button>
                </Space>  
            ),
        },
      ]
      return(
        <div className="list-ppl">
            <Button type="primary" danger onClick={()=>deleteAll()}>Delete Tabela</Button>
            <Button type="primary" danger onClick={()=>insertAll()}>Completar tabela</Button>
            <Table dataSource={ppl} columns={columns}></Table>
        </div>
      )
}

export default ListPpl;