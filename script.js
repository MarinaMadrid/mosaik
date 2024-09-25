document.getElementById("start-button").addEventListener("click", function() {
    const overlay = document.getElementById("circle-overlay");
    overlay.classList.add("hidden");

    const gallery = document.querySelector(".photo-gallery");
    gallery.classList.add("visible");
});
