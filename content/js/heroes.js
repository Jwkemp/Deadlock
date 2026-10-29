const heroes = [
    { name: "Apollo", image: "Apollo.png" },
    { name: "Billy", image: "Billy.png" },
    { name: "Calico", image: "Calico.png" },
    { name: "Doorman", image: "Doorman.png" },
    { name: "Drifter", image: "Drifter.png" },
    { name: "Dynamo", image: "Dynamo.png" },
    { name: "GreyTalon", image: "GreyTalon.png" },
    { name: "Haze", image: "Haze.png" },
    { name: "Ivy", image: "Ivy.png" },
    { name: "Kelvin", image: "Kelvin.png" },
    { name: "Lash", image: "Lash.png" },
    { name: "Mina", image: "Mina.png" },
    { name: "Mirage", image: "Mirage.png" },
    { name: "Mo & Krill", image: "Mo & Krill.png" },
    { name: "Paradox", image: "Paradox.png" },
    { name: "Rem", image: "Rem.png" },
    { name: "Seven", image: "Seven.png" },
    { name: "Sinclair", image: "Sinclair.png" },
    { name: "Vindicta", image: "Vindicta.png" },
    { name: "Viscous", image: "Viscous.png" },
    { name: "Vyper", image: "Vyper.png" },
    { name: "Warden", image: "Warden.png" }
];

const heroGrid = document.getElementById("heroGrid");

heroes.forEach(({ name, image }) => {
     const column = document.createElement("div");
    column.className = "col-2";

    const card = document.createElement("div");
    card.className = "image-card";
    card.style.backgroundImage = `url('${encodeURI(`content/img/HERO RENDERS/${image}`)}')`;
    card.innerHTML = `
        <h2 class="card-title">${name}</h2>
        <p class="card-subtitle">Class</p>
    `;

    column.appendChild(card);
    heroGrid.appendChild(column);
});