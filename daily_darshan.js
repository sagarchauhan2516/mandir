document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const filterSelect = document.getElementById("filter");

    const images = [
        { src: "images/daily_darshan/lord1.jpg", category: "Morning", category: "Swaminarayan" },
        { src: "lord2.jpg", category: "Evening" },
        { src: "lord3.jpg", category: "Festival" },
        { src: "lord4.jpg", category: "Morning" },
        { src: "lord5.jpg", category: "Evening" }
    ];

    function loadImages(filter) {
        gallery.innerHTML = "";
        images.forEach(image => {
            if (filter === "All" || image.category === filter) {
                const card = document.createElement("div");
                card.classList.add("image-card");
                card.innerHTML = `
                    <img src="${image.src}" alt="${image.category}">
                    <div class="caption">${image.category}</div>
                `;
                gallery.appendChild(card);
            }
        });
    }

    filterSelect.addEventListener("change", function () {
        loadImages(filterSelect.value);
    });

    loadImages("All");
});
