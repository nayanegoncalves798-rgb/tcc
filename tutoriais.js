const filtro = document.getElementById("filtroCategoria");
const cards = document.querySelectorAll(".card");

filtro.addEventListener("change", function () {

    const categoriaEscolhida = filtro.value;

    cards.forEach(function (card) {

        const categoriaCard = card.dataset.categoria;

        if (
            categoriaEscolhida === "todos" ||
            categoriaCard === categoriaEscolhida
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});