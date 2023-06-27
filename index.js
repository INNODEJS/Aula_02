// Instalações

const express = require("express");
const ejs = require("ejs");

const app = express();

// Configurações

app.set("view engine", "ejs");
app.use(express.static("public"));

// Componentes

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

});

app.get("/eventos", (req, res) => {
    const listaDeEventos = [{
        nome: "Encontro de desenvolvedores",
        data: "10/10/2023",
        descricao: "Federal University of Ceara in Brazil, in collaboration with Ben-Gurion University in Israel, will hold a roundtable to discuss the issue of innovation as an instrument for the promotion of non-technological firms and services. The objective of the roundtable is to analyze the experience in this field from the perspective of academic research, government activities, and business experience. The final output will be the elaboration of public policy measures and insights for further research.",
        price: "R$ 80,00",
        img: "https://www.showmetech.com.br/wp-content/uploads//2022/01/1548167635186-edited.jpg"
    },
    {
        nome: "Encontro de desenvolvedores",
        data: "10/10/2023",
        descricao: "Federal University of Ceara in Brazil, in collaboration with Ben-Gurion University in Israel, will hold a roundtable to discuss the issue of innovation as an instrument for the promotion of non-technological firms and services. The objective of the roundtable is to analyze the experience in this field from the perspective of academic research, government activities, and business experience. The final output will be the elaboration of public policy measures and insights for further research.",
        price: "R$ 35,00",
        img: "https://www.showmetech.com.br/wp-content/uploads//2022/01/1548167635186-edited.jpg"
    },
    {
        nome: "Encontro de desenvolvedores",
        data: "10/10/2023",
        descricao: "Federal University of Ceara in Brazil, in collaboration with Ben-Gurion University in Israel, will hold a roundtable to discuss the issue of innovation as an instrument for the promotion of non-technological firms and services. The objective of the roundtable is to analyze the experience in this field from the perspective of academic research, government activities, and business experience. The final output will be the elaboration of public policy measures and insights for further research.",
        price: "R$ 65,00",
        img: "https://www.showmetech.com.br/wp-content/uploads//2022/01/1548167635186-edited.jpg"
    }
];

    res.render("eventos", { eventos: listaDeEventos });
    
});


// Inicialização

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

