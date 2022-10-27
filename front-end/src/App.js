import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {Layout, PageHeader, Button} from 'antd';
import 'antd/dist/antd.dark.css';
import CreatePpl from "./services/CreatePpl";
import UpdatePpl from "./services/UpdatePpl";
import ListPpl from "./services/ListPpl";


const {Header, Content} = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <PageHeader
          ghost={true}
          title="DesafioGeo+"
          subTitle="feito por Lucas Mafra"
          extra={[
            <>
              <Button type="primary" href="/create" shape="round">Add Pessoa</Button>
              <Button type="primary"href="/list" shape="round">List Pessoa</Button>
            </>
          ]}>
        </PageHeader>
      </Header>
      <Content style={{padding:"50px"}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<CreatePpl/>}></Route>
            <Route path="/create" element={<CreatePpl/>}></Route>
            <Route path="/update/:id" element={<UpdatePpl/>}></Route>
            <Route path="/list" element={<ListPpl/>}></Route>
          </Routes>
          </BrowserRouter>
      </Content>
    </Layout>
  )
}

export default App;