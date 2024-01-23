let active = 0;

let sliderItems = document.querySelectorAll("section .item");

let showSlider = () => {

    if (active > 5) {
        active = 0;
    }
    
    if (active < 0) {
        active = 5;
    }

    sliderItems.forEach(item => {
        item.cssText = `
            transform: none;
            opacity: 0;
        `;
        item.classList.remove("active");
        item.classList.remove("prev");
        item.classList.remove("next");
    })

    sliderItems[active].classList.add("active");

    let prevIndex = (active - 1 + sliderItems.length) % sliderItems.length,
        nextIndex = (active + 1) % sliderItems.length;

    sliderItems[prevIndex].classList.add("prev");
    sliderItems[nextIndex].classList.add("next");

}

showSlider(active);


let nextBtn = document.querySelector(".nextBtn"),
    prevBtn = document.querySelector(".prevBtn");

nextBtn.addEventListener('click', () => {
    showSlider(++active);
})


prevBtn.addEventListener('click', () => {
    showSlider(--active);
})

setInterval(() => {
    showSlider(++active);
}, 2500);