const form = document.getElementById("update-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    updateProfile(); 
});

function updateProfile() {
    const nameValue = document.getElementById("name").value;
    const ageValue = document.getElementById("age").value;
    const addressValue = document.getElementById("address").value;
    const cityValue = document.getElementById("city").value;
    const stateValue = document.getElementById("state").value;
    const bioValue = document.getElementById("bio").value;

    // Envia os dados para o servidor
    fetch('/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameValue,
            age: ageValue,
            address: addressValue,
            city: cityValue,
            state: stateValue,
            bio: bioValue
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar o perfil.');
        }
        return response.json();
    })
    .then(data => {

        // Atualiza os campos do perfil
        document.getElementById("name-info").innerText = data.name || "";
        document.getElementById("age-info").innerText = data.age ? data.age + " anos" : "";
        document.getElementById("address-info").innerText = data.address || "";
        document.getElementById("city-info").innerText = data.city || "";
        document.getElementById("state-info").innerText = data.state || "";
        document.getElementById("bio-info").innerText = data.bio || "";

        // Limpa os campos do formulário depois que envia os dados para seção de informações.
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
        document.getElementById("bio").value = "";
    })
    .catch(error => {
        console.error('Erro ao atualizar o perfil:', error);
    });
}
