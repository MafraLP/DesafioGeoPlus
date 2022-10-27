import React, { useState, useEffect } from "react";
import axios from "axios";
import PplModel from "./PplModel";
import { useParams } from 'react-router-dom';

const UpdatePpl = (props) =>{
    const [formValues,setFormValue]= useState({
        nome:'',
        rg:'',
        cpf:'',
        data_nasc:'',
        sexo:'',
    });
    const params = useParams();
    const handleData = (data) =>{
        axios.put("http://localhost:4001/people/"+params.id,data)
        .then((res=>{
            if(res.status===200){
                alert("Pessoa atualizada com sucesso!");
                window.location.assign("/list");
            }else Promise.reject();
        })).catch((err)=>alert("Algo deu errado update"));
    }
    useEffect(()=>{
        axios.get("http://localhost:4001/people/"+params.id)
        .then((res)=>{
            console.log(res.data[0]);
            res.data[0].cpf=res.data[0].cpf.replace(/[^\d]/g, "");
            res.data[0].rg=res.data[0].rg.replace(/[^\d]/g, "");
            const {nome,cpf,rg,data_nasc,sexo}=res.data[0];
            // console.log(nome);
            // console.log(cpf);
            setFormValue({nome,cpf,rg,data_nasc,sexo});
            console.log(formValues);
        }
        ).catch((err)=>console.log(err));
    },[])
    return (
        <PplModel 
            handleData={handleData}
            setFormValue={formValues}
            enableReinitialize>
                Editar pessoa
        </PplModel>
    )
    
}

export default UpdatePpl;