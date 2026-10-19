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
    column.className = "col";

    const card = document.createElement("div");
    card.className = "herocard card theme-inverse";

    const img = document.createElement("img");
    img.src = encodeURI(`content/img/HERO RENDERS/${image}`);
    img.className = "herocard-img card-img";
    img.alt = name;

    const overlay = document.createElement("div");
    overlay.className = "card-img-overlay";
    overlay.innerHTML = `
                    <h4 class="card-title">${name}</h4>
                    <p class="card-text">blah blah blah</p>
                    <p class="card-text"><small>Class</small></p>
                `;

    card.appendChild(img);
    card.appendChild(overlay);
    column.appendChild(card);
    heroGrid.appendChild(column);
});