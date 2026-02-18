// // Smooth Scroll
// document.querySelectorAll("nav a").forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute("href"));
//         if (target) {
//             target.scrollIntoView({ behavior: "smooth" });
//         }
//     });
// });

// // Scroll Reveal Animation
// const sections = document.querySelectorAll("section");

// window.addEventListener("scroll", () => {
//     const trigger = window.innerHeight * 0.85;

//     sections.forEach(section => {
//         const top = section.getBoundingClientRect().top;
//         if(top < trigger){
//             section.classList.add("show");
//         }
//     });
// });

// // Gallery Slider
// const images = [
//     "images/img1.png",
//     "images/img2.jpg",
//     "images/img3.jpg",
//     "images/img4.jpg",
//     "images/img5.jpg",
//     "images/img6.jpg",
//     "images/img7.jpg",
//     "images/img8.jpg",
//     "images/img9.jpg",
//     "images/img10.jpg",
//     "images/img11.jpg",
//     "images/img12.jpg",
//     "images/img13.jpg",
//     "images/img14.jpg",
//     "images/img15.jpg",
//     "images/img16.jpg",
//     "images/img17.jpg",
//     "images/img18.jpg",
//     "images/img19.jpg",
//     "images/img20.jpg",
//     "images/img21.jpg"
// ];

// let index = 0;
// const slideImageEl = document.getElementById("slideImage");

// function changeImage(){
//     slideImageEl.style.opacity = 0;

//     setTimeout(() => {
//         index++;
//         if(index >= images.length){
//             index = 0;
//         }
//         slideImageEl.src = images[index];
//         slideImageEl.style.opacity = 1;
//     }, 500);
// }

// setInterval(changeImage, 3000);
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
