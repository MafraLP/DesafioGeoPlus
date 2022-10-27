import React, { useState, useEffect } from "react";
import axios from 'axios';
import PplModel from "./PplModel";

const CreatePpl = () => {
    const [formValues,setFormValues]= useState({
        nome:'',
        rg:'',
        cpf:'',
        data_nasc:'',
        sexo:'',
    });
    const handleData=(data)=>{
        console.log("DATA HANDLEADA");
        console.log(data);
        setFormValues(data);
        axios.post("http://localhost:4001/people",data)
            .then(res=>{
                if(res.status===200){
                    alert("Criado com sucesso");
                }else{
                    Promise.reject();
                }
            }).catch(err=>alert("algo deu errado, ",err));
    }
  
    return(
        <PplModel 
            handleData={handleData}
            setFormValue={formValues}
            enableReinitialize>
                Criar Pessoa
        </PplModel>
    )
}

export default CreatePpl;