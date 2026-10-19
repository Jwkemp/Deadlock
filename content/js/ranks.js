(async function () {
    const response = await fetch('https://api.deadlock-api.com/v1/assets/ranks')
    const ranks = await response.json();


    const rankGrid = document.getElementById("rankGrid");

    ranks.forEach(element => {
        const column = document.createElement("div");
        column.className = "col";

        const card = document.createElement("div");
        card.className = "card rankcard theme-inverse  align-bottom"
        const img = document.createElement("img");
        img.src = encodeURI(element.images.large);
        img.className = "rankcard-img card-img";
        img.alt = element.name;

        const overlay = document.createElement("div");
        overlay.className = "card-img-overlay";
        overlay.innerHTML = `<h1 class="card-title">${element.name}</h1>`;

        card.appendChild(img);
        card.appendChild(overlay);
        column.appendChild(card);
        rankGrid.appendChild(column);
    });
}());