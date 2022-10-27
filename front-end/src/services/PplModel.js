import { Form,Button,Input,Select } from 'antd';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {cpfIsInvalid} from './format/cpfIsInvalid';
import {cpfFormat} from './format/cpfFormat'
import {rgFormat} from './format/rgFormat'


const {Option}=Select;

const PplModel = ({handleData,setFormValue},) =>{
    
    const genderChk = (gen)=>{
        if(gen==="Masculino"||gen==="Feminino") return true;
        return false;
    }

    const PplSchema = Yup.object().shape({

        nome: Yup.string().required("Nome é obrigatório"),
        rg: Yup.string().matches(/^[0-9]+$/, "Somente Digitos").required("RG é obrigatório").min(9).max(9),
        cpf: Yup.string().matches(/^[0-9]+$/, "Somente digitos").test(
            'test-invalid-cpf',
            'cpf inválido',
            (cpf)=>cpfIsInvalid(cpf)).required("CPF é obrigatório"),
        data_nasc: Yup.string().required("Nascimento é obrigatório").test(
            'test-data-nasci',
            'data em formato invalido (DD/MM/YYYY)',
            (data_nasc)=>Date.parse(data_nasc)
        ),
        sexo: Yup.string().required("Sexo é obrigatório").test(
            'test-invalid-sexo',
            'sexo invalido',
            (sexo)=>{genderChk(sexo)}
        ),
        });

    const onFinish = (values) => {
        values.cpf=cpfFormat(values.cpf);
        values.rg=rgFormat(values.rg);
        console.log('Success:', values);
        handleData(values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const yupSync={
        async validator({field},value){
            await PplSchema.validateSyncAt(field,{[field]:value});
        },
    };

    return(
        <div className = "pplmodel">

                <Form
                initialValues={setFormValue}
                name="pplmodel-form"
                labelCol={{
                    span:8,
                }}
                wrapperCol={{
                    span:9,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Nome"
                        name="nome"
                        rules={[yupSync]}>
                            <Input placeholder="Insira o nome"></Input>
                    </Form.Item>
                    <Form.Item
                        label="RG"
                        name="rg"
                        rules={[yupSync]}>
                            <Input placeholder="Insira o RG"></Input>
                    </Form.Item>
                    <Form.Item
                        label="CPF"
                        name="cpf"
                        rules={[yupSync]}>
                            <Input placeholder="Insira o CPF"></Input>
                    </Form.Item>
                    <Form.Item
                    //Planejado usar datepicker aqui, porem retornava um objeto que eu nao estava conseguindo
                    //manipular na DB, decidi mudar para input de texto e verificar se eh uma data valida
                    //com date.parse
                        label="Data de nascimento"
                        name="data_nasc"
                        rules={[yupSync]}>
                            <Input placeholder="DD/MM/YYYY"></Input>
                    </Form.Item>
                    <Form.Item
                        label="Sexo"
                        name="sexo">
                            <Select
                            dafaultValue="Masculino"
                            label="Sexo"
                            name="sexo">
                                <Option value="Masculino">Masculino</Option>
                                <Option value="Feminino">Feminino</Option>
                            </Select>
                    </Form.Item>
                    <Form.Item style={{textAlign:"center"}}
                        wrapperCol={{
                            span:9,
                            offset:8,
                        }} >
                        <Button
                        type="primary" 
                        htmlType="submit">Submit</Button>
                    </Form.Item>


                </Form>
        </div>
    )
}

export default PplModel;