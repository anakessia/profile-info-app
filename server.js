const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Dados de exemplo do perfil
let profileData = {
    name: "Ana Kessia",
    age: "28 anos",
    address: "Rua Tamanqueiro, N22",
    city: "Manaus",
    state: "Amazonas",
    bio: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
};

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Rota para obter os dados do perfil
app.get('/profile', (req, res) => {
    res.json(profileData);
});

// Rota para atualizar o perfil
app.post('/update', (req, res) => {
    const { name, age, address, city, state, bio } = req.body;


    // Atualiza os dados do perfil
    profileData = {
        name: name !== undefined && name !== '' ? name : profileData.name,
        age: age !== undefined && age !== '' ? age : profileData.age,
        address: address !== undefined && address !== '' ? address : profileData.address,
        city: city !== undefined && city !== '' ? city : profileData.city,
        state: state !== undefined && state !== '' ? state : profileData.state,
        bio: bio !== undefined && bio !== '' ? bio : profileData.bio
    };

    // Retorna os dados atualizados do perfil como resposta
    res.json(profileData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
