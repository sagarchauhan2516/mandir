document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const filterSelect = document.getElementById("filter");

    const images = [
        { src: "../assets/images/daily_darshan/lord1.jpg", category: "Morning", category: "Swaminarayan", Date: "14-03-2025" },
        { src: "../assets/images/daily_darshan/ghanshyammaharaj.jpg", category: "Ghanshyam Maharaj" },
        { src: "../assets/images/daily_darshan/lakshminarayandev.jpg", category: "Lakshmi-Narayandev" },
        { src: "../assets/images/daily_darshan/swaminarayanbhagvan.jpg", category: "Swaminarayan" },
        
    ];

    function loadImages(filter, Datefilter) {
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
