// const express = require("express"); //chamo as funções do express e armazeno dentro de uma variavel
// const server = express(); //agora a variavel "server" tem todas as funcionalidades do express

// server.use(express.json()); //faço com que o server use o formato json

// let customers = [ //crio uma array com informações de clientes
//     { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
//     { id: 2, name: "Google", site: "http://google.com" },
//     { id: 3, name: "UOL", site: "http://uol.com.br" }
// ];


// server.get("/customers", (req, res) => { //crio uma rota geral que lista os clientes
//     return res.json(customers);
// });

// server.get("/customers/:id", (req, res) => { //crio uma rota espesifica que liste o cliente espesifico
//     const id = parseInt(req.params.id); //faço com que somente seja feiot a leitura de numero (pois é um id), e recebo esse id
//     const customer = customers.find(item => item.id === id); //faço com que um .find para achar um cliente espesifico
//     const status = customer ? 200 : 404; //caso ache, 200, se n, 400

//     console.debug("GET :: /customers/:id", JSON.stringify(customer));

//     return res.status(status).json(customer); //façoi com que seja retornado o status
// });

// server.post("/customers", (req, res) => { //faço um post para adicionar novos usuarios
//     const { name, site } = req.body; // mostro para criar um novo usuario com nome e site
//     const id = customers[customers.length - 1].id + 1; //faço com que leia o tamanho da array customers e va para a ultima linha e adicione um novo id

//     const newCustomer = { id, name, site }; //armazeno as informações dentro da variavel newCustomer
//     customers.push(newCustomer); //dou um push para criar novo usuario

//     return res.status(201).json(newCustomer)
// })

// server.put("/customers/:id", (req, res) => { //puxo a rota especifica
//     const id = parseInt(req.params.id) //faço com que o id se transforme em um inteiro
//     const { name, site } = req.body; //puxo o name e site do body

//     const index = customers.findIndex(item => item.id === id) //faço com que o index seja o id acahdo do cliente
//     const status = index >= 0 ? 200 : 404 //caso exista o cliente que foi pesquisado, mostra 200, caso contrario, 400

//     if(index >= 0) {
//         customers[index] = { id: parseInt(id), name, site } //caso ache o index e ele exista, atualizo com novas informações (id, name, site)
//     }

//     return res.status(status).json(customers[index]) 
// })

// server.delete("/customers/:id", (req, res) => {
//     const id = parseInt(req.params.id) //faço com que o id se transforme em um inteiro, e recebo um id 
//     const index = customers.findIndex(item => item.id === id) //faço com que o index seja o id achado do cliente
//     const status = index >= 0 ? 200 : 400 //calculo o status, caso seja achado é claro

//     if(index>=0){ //se o index for achado
//         customers.splice(index, 1) //faço com que exclua 
//     }

//     return res.status(status).json()
// })

// /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// server.listen(3000); //"Abro" o servidor dentro da porta 3000, por enquanto somento no meu computador



