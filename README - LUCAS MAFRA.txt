--Essa é a minha aplicação CRUD usando React e Node--

Como era sugerido na pagina do git, usei antd para os forms e tables, e postgre para o banco de dados.

Fiz uso também do Yups para validação e axio para conectar com a restapi.



Considerações gerais: Eu havia mencionado com o Hullen (não sei se é ele que vai
avaliar o desafio) sobre a situação do meu computador ter dado defeito na tarde em que me enviou o desafio
e portanto tive que pegar um notebook emprestado que tem capacidade computacional minuscula e esta com um defeito no hd.
Ainda que eu tenha tido uma semana, esse projeto foi desenvolvido em um dia e meio devido as situações adversas.



CONFIGURACAO (nao tenho certeza como é o processo de teste então vou descrever como eu faço para rodar)

--Front-end port 3000-> 
	code front-end
	npm run start
--Back-end  port 4001->
	node server.js


As configurações do banco de dados estão modeladas em um arquivo .env no back-end


Implementações que eu não consegui terminar:

Update=> Ele faz o update certo, mas eu queria conseguir resgatar o valor e setar como initialValue do form,
porém o setState não estava funcionando e devido ao pouco tempo isso acabou ficando de fora.
List => Não consegui fazer o sistema de pesquisa pois esse notebook que estou usando no momento está travando muito, levando cerca 
de 10-15 minutos toda vez que vai compilar a front-end, essa parte ficou por ultimo e ficou inviavel de programar.


Considerações finais:

	Foi uma experiência bem divertida trabalhar com js, nunca havia me aprofundado tanto, apesar de ja conhecer os conceitos
foi um desafio por ser um framework totalmente novo e por se tratar de um fullstack. Me lembrou bastante as coisas que eu já faço no flutter,
que sem esse conhecimento levaria o dobro do tempo para ser concluído.